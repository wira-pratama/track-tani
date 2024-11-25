<template>
    <footer 
        v-motion-fade-visible-once
        class="px-6 py-10 md:p-20 bg-neutral text-base-content"
    >
        <div class="pb-10 flex flex-col md:flex-row justify-between md:items-center">
            <h2 
                class="
                    text-4xl md:text-8xl text-white text-left font-bold font-primary leading-2 tracking-wide pb-4 md:pb-0
                "
            >
                Shoot for <br> Your Dream
            </h2>
            <p 
                v-motion-fade-visible-once
            >
                <button 
                    @click="
                        navigateTo(
                            'https://wa.me/628119511357/?text=Halo, saya tertarik untuk mendaftar Shooter Basketball Club. Bisa tolong bantu saya?',
                            {   
                                external:true, 
                                open: {
                                    target: '_blank',
                                }
                            }
                        )
                    "
                    class="btn btn-accent font-secondary tracking-wider text-white uppercase"
                >
                    Daftar Sekarang
                </button>
            </p>
        </div> 
        <div class="w-full flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between">
            <nav>
                <h6 class="text-white font-primary text-2xl">Social</h6> 
                <div class="flex flex-row text-white">
                    <NuxtLink to="https://instagram.com/sbc.shooters" target="_blank" class="btn btn-ghost px-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                        <span class="font-secondary">
                            @sbc.shooters
                        </span>
                    </NuxtLink>
                </div>
            </nav>
            <div class="md:w-1/2">
                <h6 class="text-white font-primary text-2xl">Address</h6> 
                <p class="font-secondary text-white">
                    Jalan Bangka IX No. 9B, RT3/RW10, Pela Mampang, Kec. Mampang Prapatan, Jakarta Selatan, DKI Jakarta
                </p>
            </div>
            <div>
                <h6 class="text-white font-primary text-2xl">Call Us</h6> 
                <p class="font-secondary text-white">
                    +62 811-9511-357
                </p>
                <p class="font-secondary text-white">
                    sbc.shootersbasketball@gmail.com 
                </p>
                <p class="font-secondary text-white">
                    @sbc.shooters
                </p>
            </div>
        </div>
    </footer>
</template>