import { Providers } from "@/components/Providers";
import "../index.css";

export const metadata = {
    metadataBase: new URL('https://Sumamara.github.io'),
    title: "Encuesta de Productividad",
    description: "Descubre qué bloquea tu productividad",
    icons: {
        icon: [
            { url: '/Encuesta_productividad/favicon.ico' },
            { url: '/Encuesta_productividad/favicon.png', type: 'image/png' }
        ],
        shortcut: '/Encuesta_productividad/favicon.png',
        apple: '/Encuesta_productividad/favicon.png',
    },
    openGraph: {
        title: "Encuesta de Productividad",
        description: "Descubre qué bloquea tu productividad y desbloquea tu potencial.",
        images: [
            {
                url: '/Encuesta_productividad/og_image_1771229641740.png',
                width: 640,
                height: 640,
                alt: 'Encuesta de Productividad Preview',
            }
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
