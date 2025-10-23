import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@/components/ui/input-group';

interface Car {
    id: number;
    brand: string;
    model: string;
    engine: string;
    power: string;
    price: number;
    image_path?: string;
    model_3d?: string;
}

interface InputGroupIconProps {
    onCarSelected: (car: Car | null) => void;
}

export function InputGroupIcon({ onCarSelected }: InputGroupIconProps) {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!query.trim()) return;

        try {
            const response = await fetch(
                `/cars/search?query=${encodeURIComponent(query)}`,
            );
            if (response.ok) {
                const car: Car = await response.json();
                onCarSelected(car);
                setError('');
            } else {
                const err = await response.json();
                onCarSelected(null);
                setError(err.message || 'Error en la búsqueda');
            }
        } catch (e) {
            onCarSelected(null);
            setError('Error al buscar el carro');
        }
    };

    return (
        <>
            <InputGroup>
                <InputGroupInput
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }}
                />
                <InputGroupAddon>
                    <SearchIcon />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                    <InputGroupButton onClick={handleSearch}>
                        Search
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>

            {/* Mensaje de error fuera del InputGroup, debajo */}
            {error && (
                <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>
            )}
        </>
    );
}
