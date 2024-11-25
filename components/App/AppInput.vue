<script lang="ts" setup>

</script>

<template>
    <form class="w-full h-fit p-8 flex flex-col bg-white rounded">
        <h2 class="font-primary text-2xl pb-4">Input Tracking Pangan</h2>

        <p class="form-control w-full">
            <div class="label">
                <span class="label-text text-xs">Nama</span>
            </div>
            <input 
                type="text" 
                placeholder="Type here" 
                class="input input-bordered w-full" 
            />
            <div class="label">
                <span class="label-text-alt">note: identifikasi diri</span>
            </div>
        </p>
        <p class="form-control w-full">
            <div class="label">
                <span class="label-text text-xs">Jenis Pangan</span>
            </div>
            <input 
                type="text" 
                placeholder="Type here" 
                class="input input-bordered w-full" 
            />
            <div class="label">
                <span class="label-text-alt">note: pangan yang diproduksi</span>
            </div>
        </p>
        <p class="form-control w-full">
            <div class="label">
                <span class="label-text text-xs">Jumlah (kg)</span>
            </div>
            <input 
                type="text" 
                placeholder="Type here"
                class="input input-bordered w-full"
            />
            <div class="label">
                <span class="label-text-alt">note: berat yang diproduksi</span>
            </div>
        </p>
        <p class="form-control w-full">
            <div class="label">
                <span class="label-text text-xs">Tanggal</span>
            </div>
            <input 
                type="date" 
                placeholder="Type here" 
                class="input input-bordered w-full" 
            />
            <div class="label">
                <span class="label-text-alt">note: tanggal pangan masuk ke pasar</span>
            </div>
        </p>
        <p class="form-control pt-4">
            <button 
                class="w-full btn btn-primary btn-sm"
            >
                Tambah
            </button>
        </p>
    </form>
</template>