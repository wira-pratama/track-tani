<script lang="ts" setup>
import Chart from 'chart.js/auto'

const riceChart:any = ref(false);
const sugarChart:any = ref(false);
const cornChart:any = ref(false);
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
            console.log("Error");
        }
    };
};

onMounted(async () => {
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

const drawChart = (movementData:any, chartName:any, elementId:string, unitName:string) => {
    const targetChart:any = document?.getElementById(elementId)

    const riceData:any = movementData.filter((value:any) => value.movement_unit == unitName);
    const riceTimeData:any = riceData.map((value:any) => value.movement_date);
    const riceTimeDataUnique:any = riceTimeData.filter((value:any, index:any, array:any) => array.indexOf(value) === index);
    const riceTimeDataUniqueSorted:any = riceTimeDataUnique.sort((a:any, b:any) => {return new Date(a).getTime() - new Date(b).getTime()});
    
    const riceVolumeData:any = []
    for (let i=0; i < riceTimeDataUniqueSorted.length; i++) {
        const riceTimeBinnedData = movementData.filter((value:any) => value.movement_date == riceTimeDataUniqueSorted[i]);
        const riceTimeBinnedVolume = riceTimeBinnedData.map((value:any) => Number(value.movement_volume));
        const riceTimeBinnedTotalVolume = riceTimeBinnedVolume.reduce((partialSum:any, a:any) => partialSum + a, 0);
        riceVolumeData.push(riceTimeBinnedTotalVolume);
    };

    if(Chart.getChart(elementId)) {
        Chart.getChart(elementId)?.destroy()
    }


    chartName.value =  new Chart(
        targetChart,
        {
            type: 'line',
            data: {
                labels: riceTimeDataUnique.map((row:any) => new Date(row).toDateString()),
                datasets: [
                    {
                        label: `Status Produk ${unitName}`,
                        data: riceVolumeData
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 0 
                    }
                }
            }
        }
    );
}
    
watch(foodMovements, async (newValue, oldValue) => {
    drawChart(newValue, riceChart, 'rice', 'Beras');
    drawChart(newValue, cornChart, 'corn', 'Jagung');
    drawChart(newValue, sugarChart, 'sugar', 'Gula');
})
</script>

<template>
    <div class="w-full h-fit p-8 flex flex-col bg-white rounded">
        <h2 class="font-primary text-2xl pb-4">Monitor Tracking Pangan</h2>
        <div class="w-full flex flex-col space-y-8">
            <div style="width: 100%;">
                <canvas id="rice"></canvas>
            </div>

            <div style="width: 100%;">
                <canvas id="corn"></canvas>
            </div>

            <div style="width: 100%;">
                <canvas id="sugar"></canvas>
            </div>
        </div>

        
    </div>
</template>