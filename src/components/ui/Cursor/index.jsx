import { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // 1. Rastrea la posición del mouse
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // 2. Detecta si el mouse está sobre un enlace o botón
        const handleMouseOver = (e) => {
            const target = e.target;
            // Usamos .closest() para asegurar que incluso si el hover es en un span 
            // dentro de un botón, igual lo detecte.
            if (target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        // Escuchadores globales
        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: isHovering ? 'scale(4)' : 'scale(1)',
                background: isHovering ? 'rgba(20, 110, 245, 0.2)' : '#146ef5',
            }}
        />
    );
};

export default Cursor;
