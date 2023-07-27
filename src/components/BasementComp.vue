<template>
    
        <div class="basement package">
            <div class="basement_section_left">
                <div class="basement_section_text">
                    <img src="../assets/img/Logo.svg" alt="logo">
                    <h1 class="basement_section_infoText">Interno</h1>
                </div>
                <p class="basement_section_description">It is a long established fact that a reader will be distracted
                    lookings.</p>
                <div class="basement_section_network">
                    <a class="basement_section_network_link" href="#"><img src="../assets/img/twit.svg" alt="twitter"></a>
                    <a class="basement_section_network_link" href="#"><img src="../assets/img/in.svg" alt="in"></a>
                </div>
            </div>
            <div class="basement_section_centre">
                <h3 class="basement_section_infoText_add">Pages</h3>
                <a class="basement_section_link" href="#">Home</a>
                <a class="basement_section_link" href="#">Project</a>
                <a class="basement_section_link" href="#">Blog</a>

            </div>
            <div class="basement_section_right">
                <h3 class="basement_section_infoText_add">
                    Contact
                </h3>
                <p class="basement_section_adress">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p class="basement_section_adress">contact@interno.com</p>
                <p class="basement_section_adress">(123) 456 - 7890</p>

            </div>
        </div>
   
</template>

<script>
export default {
    name: 'BasementComp',

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
.basement {
    display: flex;
    justify-content: space-between;

    &_section {
        &_left {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        &_description {
            width: 393px;
            height: 66px;
            color: #4D5053;
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
        }

        &_text {
            display: flex;
            align-items: center;
            flex-direction: row;
            gap: 10px;
        }

        &_infoText {
            width: 133px;
            height: 50px;
            left: 44px;
            top: 0px;

            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 40px;

            &_add {
                width: 87px;
                height: 31px;

                font-family: 'DM Serif Display';
                font-style: normal;
                font-weight: 400;
                font-size: 25px;
            }
        }

        &_link {
            width: 72px;
            height: 198px;
            color: #4D5053;
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
        }

        &_adress {
            width: 258px;
            // height: 215px;
            color: #4D5053;
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
        }

        &_right {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
    }

}</style>