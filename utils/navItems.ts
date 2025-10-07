import type { NavigationMenuItem } from '#ui/types'

export const navItems: NavigationMenuItem[] = [
    {
        label: 'Explore',
        icon: 'i-lucide-globe',
        to: '/explore',
        children: [
            { label: 'World Map', to: '/explore/map', icon: 'i-lucide-map' },
            { label: 'Random Fact', to: '/explore/random', icon: 'i-lucide-shuffle' }
        ]
    },
    {
        label: 'Categories',
        icon: 'i-lucide-layers',
        to: '/categories',
        children: [
            { label: 'Continents', to: '/categories/continents', icon: 'i-lucide-globe-2' },
            { label: 'Oceans', to: '/categories/oceans', icon: 'i-lucide-waveform' }
        ]
    },
    {
        label: 'Help',
        icon: 'i-lucide-circle-help',
        to: '/help'
    }
]
