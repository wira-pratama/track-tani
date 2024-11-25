<script setup lang="ts">
useHead({
    title: 'TrackTani - Aplikasi Tracking Pangan Terdesentralisasi',
    link: [
        { rel: 'canonical', href: 'https://sbcshooters.com' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'author', content: 'TrackTani Team' },
      { name: 'description', content: 'TrackTani adalah aplikasi tracking pangan terdesentralisasi yang membantu memantau rantai pasok pangan dengan transparansi dan efisiensi.' },
      { name: 'keywords', content: 'TrackTani, tracking pangan, aplikasi terdesentralisasi, rantai pasok pangan, transparansi, efisiensi, teknologi pangan' },
      { name: 'robots', content: 'index, follow' },

      // Open Graph Meta Tags
      { property: 'og:title', content: 'TrackTani: Aplikasi Tracking Pangan Terdesentralisasi' },
      { property: 'og:description', content: 'Monitor rantai pasok pangan dengan aplikasi TrackTani yang terdesentralisasi, memberikan transparansi dan efisiensi untuk semua pihak.' },
      { property: 'og:url', content: 'https://tracktani.com' },
      { property: 'og:type', content: 'website' },

      // Twitter Meta Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'TrackTani: Aplikasi Tracking Pangan Terdesentralisasi' },
      { name: 'twitter:description', content: 'Dengan TrackTani, pantau rantai pasok pangan Anda dengan mudah dan aman.' },
    ],
    htmlAttrs: { 
        lang: 'id' 
    },
});
</script>
<template>
    <!-- <AppHeader /> -->
    <section 
        id="hero"
        style="
            background-image: url('/bg/main.jpg'); 
            background-position: center center; 
            background-size: cover; 
            background-repeat: no-repeat;
            width: 100%;
        "
        class="min-h-screen w-screen flex flex-col items-center justify-center md:px-0 py-20"
    >
        <div class="mb-8 flex flex-col items-center">
            <h1 class="text-6xl font-primary text-white text-center">
                Track Tani
            </h1>
            <p class="text-3xl font-secondary text-white text-center">
                "Aplikasi Tracking Pangan Terdesentralisasi"
            </p>
        </div>
        
        <div class="w-full flex sm:flex-row flex-col sm:space-x-8 space-y-8 sm:space-y-0 items-start px-2 sm:px-20">
            <div class="w-full sm:w-1/2">
                <AppInput />
            </div>
            <div class="w-full sm:w-1/2">
                <AppStat />
            </div>
        </div>
    </section>
    <section
        id="our-history"
        class="flex flex-col md:flex-row items-center justify-center py-10 md:py-4 px-4 md:px-28 space-y-4 md:space-y-16"
    >
        <div
            v-motion-slide-visible-once-left
            class="pb-2 w-full md:w-2/5"
        >
            <h2 
                class="
                    text-2xl md:text-6xl text-primary text-left font-medium font-primary leading-2 tracking-wide max-w-6xl 
                "
            >
                What Makes Us Different?<span class="text-accent">.</span>
            </h2>
        </div>
        <div
            v-motion-slide-visible-once-right
            class="flex flex-col space-y-6 w-full md:w-3/5 font-secondary text-xl leading-normal text-justify"
        >
            <p>
                TrackTani menawarkan fitur-fitur yang kompetitif seperti yang dapat dilihat pada gambar di bawah:
            </p>
            <p class="w-full">
                <NuxtImg 
                    src="/info/comp.jpg"
                    class="w-full object-contain rounded-lg"
                />
            </p>
            <p>
                Terlihat bahwa TrackTani memiliki <em>positioning</em> yang unik ketimbang kompetitor-kompetitor lain.
            </p>
        </div>
    </section>
    <section
        id="our-history"
        class="flex flex-col md:flex-row items-center justify-center py-10 md:py-4 md:pb-20 px-4 md:px-28 space-y-4 md:space-y-16"
    >
        <div
            v-motion-slide-visible-once-left
            class="pb-2 w-full md:w-2/5"
        >
            <h2 
                class="
                    text-2xl md:text-6xl text-primary text-left font-medium font-primary leading-2 tracking-wide max-w-6xl 
                "
            >
                How Do We Conduct Business?<span class="text-accent">.</span>
            </h2>
        </div>
        <div
            v-motion-slide-visible-once-right
            class="flex flex-col space-y-6 w-full md:w-3/5 font-secondary text-xl leading-normal text-justify"
        >
            <p>
                TrackTani sebagai pengembang <em>software</em> memiliki model bisnis utama sebagai <em>software freemium</em>.
            </p>
            <p class="w-full">
                <NuxtImg 
                    src="/info/bmc.jpg"
                    class="w-full object-contain rounded-lg"
                />
            </p>
            <p>
                TrackTani membuka channel penjualan baik via B2B maupun B2C. 
            </p>
        </div>
    </section>   
</template>

