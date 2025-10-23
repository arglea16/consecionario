import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ModelErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Actualiza el estado para mostrar el fallback UI
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Aquí puedes loguear el error a un servicio externo si quieres
        console.error('Error cargando modelo 3D:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // UI alternativa cuando ocurre un error
            return <p>No se pudo cargar el modelo 3D.</p>;
        }

        return this.props.children;
    }
}
