import { SearchIcon } from 'lucide-react';

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@/components/ui/input-group';

export function InputGroupIcon() {
    return (
        <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
                <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
                <InputGroupButton>Search</InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    );
}
