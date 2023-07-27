<template>
    
        <div class="header package">
            <div class="header_left">
                <a href="#"><img src="../assets/img/Logo.svg" alt="logo"></a>
                <a class="header_left_logoText" href="#">Interno</a>
            </div>
            <div class="header_right">
                <a class="header_right_naviText" href="#">Home</a>
                <a class="header_right_naviText" href="#">Project</a>
                <a class="header_right_naviText" href="#">Blog</a>
            </div>
        </div>
   
</template>

<script>
export default {
    name: 'HeadingComp',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.header{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 53px;
    margin-bottom: 90px;
    &_left{
        position: relative;
        width: 133px;
        height: 50px;
        top: 0px;
        display: flex;
        justify-content: space-between;
        &_logoText{
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 125%;
            color: #292F36;
            padding-left: 10px;

        }
    }
    &_right{
        position:relative;
    width: 243px;
    height: 25px;
    // left: 53px;
    top: 0px;
    display: flex;
    justify-content: space-between;

        &_naviText{
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 125%;
            color: #292F36;
        }
    }
}
</style>