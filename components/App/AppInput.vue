<script lang="ts" setup>

const db:any = ref();
const stockTypes:any = ["Beras", "Gula", "Jagung"];

const foodMovements:any = useFoodMovements();
const foodMovementInput:any = ref({
    movement_actor: '',
    movement_unit: '',
    movement_volume: '',
    movement_date:  '',
});

const getAllFoodMovements: any = () => {
    let foodMovementTable = db.value.transaction("foodMovement", "readwrite").objectStore("foodMovement");
    let foodMovementTableRequest = foodMovementTable.getAll();

    foodMovementTableRequest.onsuccess = () => {
        if (foodMovementTableRequest.result !== undefined) {
            foodMovements.value = foodMovementTableRequest.result;
        } else {
            console.log("ERror");
        }
    };
}

const createFoodMovement: any = () => {
    if (
        foodMovementInput.value.movement_actor == '' ||
        foodMovementInput.value.movement_unit == '' ||
        foodMovementInput.value.movement_volume == '' ||
        foodMovementInput.value.movement_date == ''
    ) {
        return false
    };

    foodMovementInput.value.movement_date = new Date(foodMovementInput.value.movement_date).toISOString()

    let foodMovementTable = db.value.transaction("foodMovement", "readwrite").objectStore("foodMovement");
    let foodMovementTableRequest = foodMovementTable.add({
        ...foodMovementInput.value
    });

    foodMovementTableRequest.onsuccess = () => {
        console.log("Food added to the db", foodMovementTableRequest.result);
        foodMovementInput.value = {
            movement_unit: '',
            movement_type: '',
            movement_volume: '',
            movement_date:  '',
        };
    };
    foodMovementTableRequest.onerror = () => {
        console.log("Error", foodMovementTableRequest.error);
    };

    getAllFoodMovements();
};

onMounted(() => {
    let openRequest = window.indexedDB.open("TrackTani", 1);

    /*
        Initialize database
    */
    openRequest.onupgradeneeded = () => {
        db.value = openRequest.result;
        /*
            Declare stockMovement comprising:
            1. movementActor (who did it)
            2. movementValue (total value)
            3. movementVolume (in quantity)
            4. movementDate (in Date object)
        */
        if (!db.value.objectStoreNames.contains('foodMovement')) {
            let foodMovementTable:any = db.value.createObjectStore(
                'foodMovement', 
                {
                    keyPath: 'id',
                    autoIncrement: true
                }
            )
            foodMovementTable.createIndex('movementUnitIndex', 'movement_unit');
            foodMovementTable.createIndex('movementDateIndex', 'movement_date');
        }
    };

    /*
        TODO: handle error and show popup
    */
    openRequest.onerror = () => {
        console.error("Error", openRequest.error);
    };

    /*
        Fetch data from stockObject and stockMovement
        TODO: handle success and show popup
    */
    openRequest.onsuccess = () => {
        db.value = openRequest.result;

        getAllFoodMovements();
    };
});
</script>

<template>
    <ClientOnly>
        <form @submit.prevent="createFoodMovement()" class="font-secondary w-full h-fit p-8 flex flex-col bg-white rounded">
            <h2 class="font-primary text-2xl pb-4">Input Tracking Pangan</h2>
            <p class="form-control w-full">
                <div class="label">
                    <span class="label-text text-xs">ID (Nama)</span>
                </div>
                <input
                    type="text" 
                    placeholder="Type here" 
                    class="input input-bordered w-full" 
                    v-model="foodMovementInput.movement_actor"
                />
                <div class="label">
                    <span class="label-text-alt">note: identifikasi diri</span>
                </div>
            </p>
            <p class="form-control w-full">
                <div class="label">
                    <span class="label-text text-xs">Jenis Pangan</span>
                </div>
                <select 
                    v-model="foodMovementInput.movement_unit" 
                    placeholder="Tipe pergerakan stok" 
                    class="select select-bordered w-full font-secondary"
                    :class="foodMovementInput.movement_unit ? 'text-black' : 'text-gray-400'"
                >
                    <option value="''" class="text-gray-400" disabled selected>Pilih Tipe Pergerakan</option>
                    <option v-for="type, idx in stockTypes" :value="type" :key="`unit_type_${type}`" class="text-black">{{ type }}</option>
                </select>
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
                    v-model="foodMovementInput.movement_volume"
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
                    v-model="foodMovementInput.movement_date"
                />
                <div class="label">
                    <span class="label-text-alt">note: tanggal pangan masuk ke pasar</span>
                </div>
            </p>
            <p class="form-control pt-4">
                <button 
                    class="w-full btn btn-primary btn-sm"
                    role="submit"
                >
                    Tambah
                </button>
            </p>
        </form>
    </ClientOnly>
</template>