<template>
<!--    <div id='test'>-->

        <button :class="type">{{btnText}}</button>


<!--    </div>-->

</template>

<script>

    export default {
        name: 'test',
        props:{
            type:{
                type: String,
                default:'blue'
            },
            btnText:{
                type: String,
                default:'按钮'
            }

        },
        data() {
            return {}
        },

    }
</script>

<style scoped>

    .blue {
        padding: 6px;
        min-width:50px;
        border: #999999;
        background: #6196cc;
        color: white;
        border-radius: 5px;
        margin-right: 10px;

    }

    .green {
        padding: 6px;
        min-width:50px;
        border: #999999;
        background: #4e6e1e;
        color: white;
        border-radius: 5px;
        margin-right: 10px;


    }

    .yellow {
        min-width:50px;
        padding: 6px;
        border: #999999;
        background: #f8c555;
        color: white;
        border-radius: 5px;
        margin-right: 10px;


    }

    .red {
        min-width:50px;
        padding: 6px;
        border: #999999;
        background: #da5961;
        color: white;
        border-radius: 5px;
        margin-right: 10px;


    }


</style>
