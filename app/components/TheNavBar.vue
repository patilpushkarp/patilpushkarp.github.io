<script setup lang="ts">
const isDark = ref(false) // Default to light theme since home page is white
const isAtTop = ref(true)
const isLogoHovered = ref(false)
const route = useRoute()

onMounted(() => {
    const updateTheme = () => {
        // Find the section currently under the top of the viewport
        // Reverse array to check nested (inner) sections before their parents
        const sections = Array.from(document.querySelectorAll('section, header, footer, div[data-theme]')).reverse()
        let currentTheme = 'light' // Default for white background

        // Check scroll position for logo
        isAtTop.value = window.scrollY < 20

        // Check which element is at the navbar position (offset by a bit)
        const checkPoint = window.scrollY + 50

        for (const section of sections) {
            const rect = section.getBoundingClientRect()
            const absoluteTop = rect.top + window.scrollY
            const absoluteBottom = absoluteTop + rect.height

            if (checkPoint >= absoluteTop && checkPoint < absoluteBottom) {
                // If section has explicit theme, use it
                if (section.hasAttribute('data-theme')) {
                    currentTheme = section.getAttribute('data-theme') || 'light'
                } else {
                    // Fallback: Check computed background color
                    const bg = window.getComputedStyle(section).backgroundColor
                    // Simple check for dark backgrounds
                    if (bg === 'rgb(0, 0, 0)' || bg === '#000000' || bg.includes('rgba(0, 0, 0')) {
                        currentTheme = 'dark'
                    } else if (bg === 'rgb(255, 255, 255)' || bg === '#ffffff') {
                        currentTheme = 'light'
                    }
                }
                break;
            }
        }
        isDark.value = currentTheme !== 'light'
    }

    window.addEventListener('scroll', updateTheme)

    // Watch for route changes to update theme after navigation
    watch(() => route.path, () => {
        // Wait for next tick/transition
        setTimeout(updateTheme, 100)
        setTimeout(updateTheme, 300) // Double check for slower transitions
    })

    // Run immediately
    updateTheme()
    // Run again shortly after to ensure layout is settled
    setTimeout(updateTheme, 50)

    onUnmounted(() => {
        window.removeEventListener('scroll', updateTheme)
    })
})
</script>

<template>
    <nav class="navbar" :class="{ 'theme-dark': isDark, 'theme-light': !isDark }">
        <div class="nav-container">
            <!-- Left: Logo -->
            <div class="nav-left">
                <NuxtLink to="/" class="logo" @mouseenter="isLogoHovered = true" @mouseleave="isLogoHovered = false">
                    P<span class="logo-suffix" :class="{ 'collapsed': !isAtTop && !isLogoHovered }">ushkar</span>
                </NuxtLink>
            </div>

            <!-- Center: Navigation (Glass Pill) -->
            <div class="nav-center-wrapper">
                <div class="glass-pill">
                    <NuxtLink to="/about" class="nav-link">About</NuxtLink>
                    <NuxtLink to="/experience" class="nav-link">Experience</NuxtLink>
                    <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
                </div>
            </div>

            <!-- Right: Actions -->
            <div class="nav-right">
                <a href="/Pushkar_Patil_resume.pdf" target="_blank" class="action-btn">Resume</a>
                <NuxtLink to="/contact" class="action-btn">Contact</NuxtLink>
            </div>

            <!-- Mobile Toggle -->
            <button class="mobile-toggle" aria-label="Menu">
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    /* High z-index */
    padding: 1.5rem 0;
    transition: all 0.3s ease;
    /* No mix-blend-mode here anymore */
}

.nav-container {
    max-width: 100%;
    padding: 0 3rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

/* =========================================
   THEME: DARK (Default / Black Background)
   ========================================= */
.navbar.theme-dark .logo {
    color: white;
}

.navbar.theme-dark .glass-pill {
    /* Blends into black: Very subtle white tint makes it look like 'light glass' on dark */
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: none;
}

.navbar.theme-dark .nav-link {
    color: rgba(255, 255, 255, 0.7);
}

.navbar.theme-dark .nav-link:hover,
.navbar.theme-dark .nav-link.router-link-active {
    color: white;
}

.navbar.theme-dark .nav-link.router-link-active::after {
    background-color: white;
}

.navbar.theme-dark .action-btn {
    color: white;
    background: rgba(255, 255, 255, 0.08);
    border: none;
}

.navbar.theme-dark .action-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

.navbar.theme-dark .mobile-toggle span {
    background-color: white;
}


/* =========================================
   THEME: LIGHT (White Background)
   ========================================= */
.navbar.theme-light .logo {
    color: black;
}

.navbar.theme-light .glass-pill {
    /* Blends into white: Very subtle black tint makes it look like 'dark glass' on white */
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: none;
}

.navbar.theme-light .nav-link {
    color: rgba(0, 0, 0, 0.65);
}

.navbar.theme-light .nav-link:hover,
.navbar.theme-light .nav-link.router-link-active {
    color: black;
}

.navbar.theme-light .nav-link.router-link-active::after {
    background-color: black;
}

.navbar.theme-light .action-btn {
    color: black;
    background: rgba(0, 0, 0, 0.04);
    border: none;
}

.navbar.theme-light .action-btn:hover {
    background: rgba(0, 0, 0, 0.1);
}

.navbar.theme-light .mobile-toggle span {
    background-color: black;
}


/* =========================================
   SHARED LAYOUT STYLES
   ========================================= */

/* Left */
.nav-left {
    z-index: 110;
    display: flex;
    align-items: center;
}

.logo {
    font-family: 'Monsieur La Doulaise', cursive;
    font-size: 2.5rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease;
    min-width: 40px;
    display: inline-flex;
    /* Changed from inline-block to keep baseline aligned */
    align-items: baseline;
    /* Ensure text baseline alignment */
    /* text-align: center; Removed to behave like normal text */
}

.logo-suffix {
    display: inline-block;
    max-width: 200px;
    /* Arbitrary large enough width */
    opacity: 1;
    overflow: hidden;
    transition: max-width 0.5s ease, opacity 0.5s ease;
    white-space: nowrap;
}

.logo-suffix.collapsed {
    max-width: 0;
    opacity: 0;
}

/* Center */
.nav-center-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    width: auto;
    display: flex;
    justify-content: center;
}

.glass-pill {
    border-radius: 100px;
    padding: 0.3rem 3rem 0.6rem;
    display: flex;
    gap: 12rem;
    align-items: center;
    transition: all 0.3s ease;
}

.nav-link {
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    letter-spacing: 0.02em;
}

.nav-link.router-link-active::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}

/* Right */
.nav-right {
    display: flex;
    gap: 1rem;
    z-index: 110;
    align-items: center;
}

.action-btn {
    padding: 0.8rem 2rem;
    border-radius: 100px;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;
}

/* Mobile */
.mobile-toggle {
    display: none;
    background: none;
    border: none;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    padding: 0;
    z-index: 120;
}

.mobile-toggle span {
    width: 24px;
    height: 2px;
    display: block;
    transition: background-color 0.3s ease;
}

@media (max-width: 768px) {

    .nav-center-wrapper,
    .nav-right {
        display: none;
    }

    .nav-left {
        z-index: 120;
    }

    .mobile-toggle {
        display: flex;
    }
}
</style>
