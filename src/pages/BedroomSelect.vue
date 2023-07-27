<template>
    <div>
        <div class="mainSector package">
            <div v-for="item in info" :key="item.id">

                <img class="mainSector_img" :src=item.src alt="">
                <h1 class="mainSector_h1">{{ item.name }}</h1>
                <p class="mainSector_p">{{ item.group }}</p>
                <div>
                    <button class="mainSector_btn"><img :src=item.btn alt=""></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BedroomSelect',

    data() {
        return {
            info: [
                { src: "/img/BedRoom1.2815eabc.jpg", name: "Minimal Bedroom", group: "Decor / Artchitecture", btn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBfdIxT8JAFAfw945IoptJ0RRi0rEwlHMAGek3YHQDN7+F+EnU0ZHRCd0MDpwLulkTS87QmG4kLOe71jYm7fWftHe9/vKufS22u/0PoGxxdxoIEYMh7G909lV9DhVhCplPY0AH73R7NyZYi+RXbNknMwZqogAHR8ct2HyHTwWoTxo37OYDAF4CwrAM17LJRq6lZTc/EXCksWW3gkiGrwWYVl4LAogAQzpGh3Zz9kMFCjDF4WOGGeC5ZTfuIyljBEPaXu8WEMe6Iwp3vhHqULuW1AmuMauChPI5M1c7083n6dbML4Wu179S9AEQVKzRu3gubq0RvfI0uUBIUGFr1xuMM0SVLlbiRWT38qftcM6Vqi+TRYTrlVhM/xdJKrqcO6D25iaUrGuE6b/oUP27N7GYQElYjgCECeVbU4ItHvhQkV87PHjmCbAqXgAAAABJRU5ErkJggg==" },
                { src: "/img/BedRoom2.7d6cce04.jpg", name: "Minimal Bedroom", group: "Decor / Artchitecture", btn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBfdIxT8JAFAfw945IoptJ0RRi0rEwlHMAGek3YHQDN7+F+EnU0ZHRCd0MDpwLulkTS87QmG4kLOe71jYm7fWftHe9/vKufS22u/0PoGxxdxoIEYMh7G909lV9DhVhCplPY0AH73R7NyZYi+RXbNknMwZqogAHR8ct2HyHTwWoTxo37OYDAF4CwrAM17LJRq6lZTc/EXCksWW3gkiGrwWYVl4LAogAQzpGh3Zz9kMFCjDF4WOGGeC5ZTfuIyljBEPaXu8WEMe6Iwp3vhHqULuW1AmuMauChPI5M1c7083n6dbML4Wu179S9AEQVKzRu3gubq0RvfI0uUBIUGFr1xuMM0SVLlbiRWT38qftcM6Vqi+TRYTrlVhM/xdJKrqcO6D25iaUrGuE6b/oUP27N7GYQElYjgCECeVbU4ItHvhQkV87PHjmCbAqXgAAAABJRU5ErkJggg==" },
                { src: "/img/BedRoom3.05c6f512.jpg", name: "Classic Minimal Bedroom", group: "Decor / Artchitecture", btn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBfdIxT8JAFAfw945IoptJ0RRi0rEwlHMAGek3YHQDN7+F+EnU0ZHRCd0MDpwLulkTS87QmG4kLOe71jYm7fWftHe9/vKufS22u/0PoGxxdxoIEYMh7G909lV9DhVhCplPY0AH73R7NyZYi+RXbNknMwZqogAHR8ct2HyHTwWoTxo37OYDAF4CwrAM17LJRq6lZTc/EXCksWW3gkiGrwWYVl4LAogAQzpGh3Zz9kMFCjDF4WOGGeC5ZTfuIyljBEPaXu8WEMe6Iwp3vhHqULuW1AmuMauChPI5M1c7083n6dbML4Wu179S9AEQVKzRu3gubq0RvfI0uUBIUGFr1xuMM0SVLlbiRWT38qftcM6Vqi+TRYTrlVhM/xdJKrqcO6D25iaUrGuE6b/oUP27N7GYQElYjgCECeVbU4ItHvhQkV87PHjmCbAqXgAAAABJRU5ErkJggg==" },
                { src: "/img/BedRoom4.60abfe04.jpg", name: "Modern Bedroom", group: "Decor / Artchitecture", btn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBfdIxT8JAFAfw945IoptJ0RRi0rEwlHMAGek3YHQDN7+F+EnU0ZHRCd0MDpwLulkTS87QmG4kLOe71jYm7fWftHe9/vKufS22u/0PoGxxdxoIEYMh7G909lV9DhVhCplPY0AH73R7NyZYi+RXbNknMwZqogAHR8ct2HyHTwWoTxo37OYDAF4CwrAM17LJRq6lZTc/EXCksWW3gkiGrwWYVl4LAogAQzpGh3Zz9kMFCjDF4WOGGeC5ZTfuIyljBEPaXu8WEMe6Iwp3vhHqULuW1AmuMauChPI5M1c7083n6dbML4Wu179S9AEQVKzRu3gubq0RvfI0uUBIUGFr1xuMM0SVLlbiRWT38qftcM6Vqi+TRYTrlVhM/xdJKrqcO6D25iaUrGuE6b/oUP27N7GYQElYjgCECeVbU4ItHvhQkV87PHjmCbAqXgAAAABJRU5ErkJggg==" },
            ],
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.mainSector {
    
    display: grid;
    gap: 131px;
    grid-template-columns: repeat(2, 0px);
    justify-items: center;
    justify-content: space-around;
    margin-top: 100px;
    margin-bottom: 100px;

    &_img {
        padding-bottom: 20px;
    }

    &_h1 {
        display: flex;
    }

    &_p {
        display: flex;
    }

    &_btn {
        position: relative;
        width: 70px;
        height: 70px;
        left: 235px;
        top: -60px;
        border-radius: 50%;
        background: #F4F0EC;
    }
}</style>