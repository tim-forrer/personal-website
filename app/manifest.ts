import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Tim Forrer\'s Personal Website',
        short_name: 'Tim Forrer',
        description: 'Tim Forrer\'s Personal Website built with Next.js',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                "src": "/images/icon-192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/images/icon-512.png",
                "sizes": "512x512",
                "type": "image/png"
            },
        ],
    }
}