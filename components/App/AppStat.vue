<script lang="ts" setup>
import Chart from 'chart.js/auto'

const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
];


const chart:any = ref(false);
onMounted(() => {
    const targetChart:any = document?.getElementById('acquisitions')
    chart.value =  new Chart(
        targetChart,
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                    label: 'Acquisitions by year',
                    data: data.map(row => row.count)
                    }
                ]
            }
        }
    )
});
</script>

<template>
    <div class="w-full h-fit p-8 flex flex-col bg-white rounded">
        <h2 class="font-primary text-2xl pb-4">Monitor Tracking Pangan</h2>


        <div style="width: 100%;">
            <canvas id="acquisitions"></canvas>
        </div>
    </div>
</template>