<template>
    <div class="main package">
        <div class="main_button">
            <button  class="main_btn">Bathroom</button>
            <button @click="kitchenbtn()" class="main_btn">Kitchen</button>
            <button @click="bedroombtn()" class="main_btn">Bedroom</button>
            <button  class="main_btn">Living Area</button>

        </div>
        <div v-if="bedroom" class="mainSector">
            <div v-for="item in info" :key="item.id">

                <img class="mainSector_img" :src=item.src alt="">
                <h1 class="mainSector_h1">{{ item.name }}</h1>
                <p class="mainSector_p">{{ item.group }}</p>
                <div>
                    <button class="mainSector_btn"><img :src=item.btn alt=""></button>
                </div>
            </div>
        </div>
        <div v-if="kitchen" class="mainSector">
            <div v-for="item in infoKitchen" :key="item.id">

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
    name: 'VUEMainComp',

    data() {
        return {
            info: [
                { src: "/img/BedRoom1.2815eabc.jpg", name: "Minimal Bedroom", group: "Decor / Artchitecture", btn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBfdIxT8JAFAfw945IoptJ0RRi0rEwlHMAGek3YHQDN7+F+EnU0ZHRCd0MDpwLulkTS87QmG4kLOe71jYm7fWftHe9/vKufS22u/0PoGxxdxoIEYMh7G909lV9DhVhCplPY0AH73R7NyZYi+RXbNknMwZqogAHR8ct2HyHTwWoTxo37OYDAF4CwrAM17LJRq6lZTc/EXCksWW3gkiGrwWYVl4LAogAQzpGh3Zz9kMFCjDF4WOGGeC5ZTfuIyljBEPaXu8WEMe6Iwp3vhHqULuW1AmuMauChPI5M1c7083n6dbML4Wu179S9AEQVKzRu3gubq0RvfI0uUBIUGFr1xuMM0SVLlbiRWT38qftcM6Vqi+TRYTrlVhM/xdJKrqcO6D25iaUrGuE6b/oUP27N7GYQElYjgCECeVbU4ItHvhQkV87PHjmCbAqXgAAAABJRU5ErkJggg==" },
                { src: "/img/BedRoom2.7d6cce04.jpg", name: "Minimal Bedroom", group: "Decor / Artchitecture", btn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBfdIxT8JAFAfw945IoptJ0RRi0rEwlHMAGek3YHQDN7+F+EnU0ZHRCd0MDpwLulkTS87QmG4kLOe71jYm7fWftHe9/vKufS22u/0PoGxxdxoIEYMh7G909lV9DhVhCplPY0AH73R7NyZYi+RXbNknMwZqogAHR8ct2HyHTwWoTxo37OYDAF4CwrAM17LJRq6lZTc/EXCksWW3gkiGrwWYVl4LAogAQzpGh3Zz9kMFCjDF4WOGGeC5ZTfuIyljBEPaXu8WEMe6Iwp3vhHqULuW1AmuMauChPI5M1c7083n6dbML4Wu179S9AEQVKzRu3gubq0RvfI0uUBIUGFr1xuMM0SVLlbiRWT38qftcM6Vqi+TRYTrlVhM/xdJKrqcO6D25iaUrGuE6b/oUP27N7GYQElYjgCECeVbU4ItHvhQkV87PHjmCbAqXgAAAABJRU5ErkJggg==" },
                { src: "/img/BedRoom3.05c6f512.jpg", name: "Classic Minimal Bedroom", group: "Decor / Artchitecture", btn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBfdIxT8JAFAfw945IoptJ0RRi0rEwlHMAGek3YHQDN7+F+EnU0ZHRCd0MDpwLulkTS87QmG4kLOe71jYm7fWftHe9/vKufS22u/0PoGxxdxoIEYMh7G909lV9DhVhCplPY0AH73R7NyZYi+RXbNknMwZqogAHR8ct2HyHTwWoTxo37OYDAF4CwrAM17LJRq6lZTc/EXCksWW3gkiGrwWYVl4LAogAQzpGh3Zz9kMFCjDF4WOGGeC5ZTfuIyljBEPaXu8WEMe6Iwp3vhHqULuW1AmuMauChPI5M1c7083n6dbML4Wu179S9AEQVKzRu3gubq0RvfI0uUBIUGFr1xuMM0SVLlbiRWT38qftcM6Vqi+TRYTrlVhM/xdJKrqcO6D25iaUrGuE6b/oUP27N7GYQElYjgCECeVbU4ItHvhQkV87PHjmCbAqXgAAAABJRU5ErkJggg==" },
                { src: "/img/BedRoom4.60abfe04.jpg", name: "Modern Bedroom", group: "Decor / Artchitecture", btn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBfdIxT8JAFAfw945IoptJ0RRi0rEwlHMAGek3YHQDN7+F+EnU0ZHRCd0MDpwLulkTS87QmG4kLOe71jYm7fWftHe9/vKufS22u/0PoGxxdxoIEYMh7G909lV9DhVhCplPY0AH73R7NyZYi+RXbNknMwZqogAHR8ct2HyHTwWoTxo37OYDAF4CwrAM17LJRq6lZTc/EXCksWW3gkiGrwWYVl4LAogAQzpGh3Zz9kMFCjDF4WOGGeC5ZTfuIyljBEPaXu8WEMe6Iwp3vhHqULuW1AmuMauChPI5M1c7083n6dbML4Wu179S9AEQVKzRu3gubq0RvfI0uUBIUGFr1xuMM0SVLlbiRWT38qftcM6Vqi+TRYTrlVhM/xdJKrqcO6D25iaUrGuE6b/oUP27N7GYQElYjgCECeVbU4ItHvhQkV87PHjmCbAqXgAAAABJRU5ErkJggg==" },
            ],
            infoKitchen: [
                { src: "/img/ModernKitchen1.b3243a71.jpg", name: "Modern Kitchen", group: "Decor / Artchitecture", btn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBfdIxT8JAFAfw945IoptJ0RRi0rEwlHMAGek3YHQDN7+F+EnU0ZHRCd0MDpwLulkTS87QmG4kLOe71jYm7fWftHe9/vKufS22u/0PoGxxdxoIEYMh7G909lV9DhVhCplPY0AH73R7NyZYi+RXbNknMwZqogAHR8ct2HyHTwWoTxo37OYDAF4CwrAM17LJRq6lZTc/EXCksWW3gkiGrwWYVl4LAogAQzpGh3Zz9kMFCjDF4WOGGeC5ZTfuIyljBEPaXu8WEMe6Iwp3vhHqULuW1AmuMauChPI5M1c7083n6dbML4Wu179S9AEQVKzRu3gubq0RvfI0uUBIUGFr1xuMM0SVLlbiRWT38qftcM6Vqi+TRYTrlVhM/xdJKrqcO6D25iaUrGuE6b/oUP27N7GYQElYjgCECeVbU4ItHvhQkV87PHjmCbAqXgAAAABJRU5ErkJggg==" },
                { src: "/img/ModernKitchen2.0473d5d8.jpg", name: "Modern Kitchen", group: "Decor / Artchitecture", btn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBfdIxT8JAFAfw945IoptJ0RRi0rEwlHMAGek3YHQDN7+F+EnU0ZHRCd0MDpwLulkTS87QmG4kLOe71jYm7fWftHe9/vKufS22u/0PoGxxdxoIEYMh7G909lV9DhVhCplPY0AH73R7NyZYi+RXbNknMwZqogAHR8ct2HyHTwWoTxo37OYDAF4CwrAM17LJRq6lZTc/EXCksWW3gkiGrwWYVl4LAogAQzpGh3Zz9kMFCjDF4WOGGeC5ZTfuIyljBEPaXu8WEMe6Iwp3vhHqULuW1AmuMauChPI5M1c7083n6dbML4Wu179S9AEQVKzRu3gubq0RvfI0uUBIUGFr1xuMM0SVLlbiRWT38qftcM6Vqi+TRYTrlVhM/xdJKrqcO6D25iaUrGuE6b/oUP27N7GYQElYjgCECeVbU4ItHvhQkV87PHjmCbAqXgAAAABJRU5ErkJggg==" },
                { src: "/img/ModernKitchen3.c7df9a47.jpg", name: "Modern Kitchen", group: "Decor / Artchitecture", btn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBfdIxT8JAFAfw945IoptJ0RRi0rEwlHMAGek3YHQDN7+F+EnU0ZHRCd0MDpwLulkTS87QmG4kLOe71jYm7fWftHe9/vKufS22u/0PoGxxdxoIEYMh7G909lV9DhVhCplPY0AH73R7NyZYi+RXbNknMwZqogAHR8ct2HyHTwWoTxo37OYDAF4CwrAM17LJRq6lZTc/EXCksWW3gkiGrwWYVl4LAogAQzpGh3Zz9kMFCjDF4WOGGeC5ZTfuIyljBEPaXu8WEMe6Iwp3vhHqULuW1AmuMauChPI5M1c7083n6dbML4Wu179S9AEQVKzRu3gubq0RvfI0uUBIUGFr1xuMM0SVLlbiRWT38qftcM6Vqi+TRYTrlVhM/xdJKrqcO6D25iaUrGuE6b/oUP27N7GYQElYjgCECeVbU4ItHvhQkV87PHjmCbAqXgAAAABJRU5ErkJggg==" },
                { src: "/img/ModernKitchen4.acb8cafa.jpg", name: "Modern Kitchen", group: "Decor / Artchitecture", btn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBfdIxT8JAFAfw945IoptJ0RRi0rEwlHMAGek3YHQDN7+F+EnU0ZHRCd0MDpwLulkTS87QmG4kLOe71jYm7fWftHe9/vKufS22u/0PoGxxdxoIEYMh7G909lV9DhVhCplPY0AH73R7NyZYi+RXbNknMwZqogAHR8ct2HyHTwWoTxo37OYDAF4CwrAM17LJRq6lZTc/EXCksWW3gkiGrwWYVl4LAogAQzpGh3Zz9kMFCjDF4WOGGeC5ZTfuIyljBEPaXu8WEMe6Iwp3vhHqULuW1AmuMauChPI5M1c7083n6dbML4Wu179S9AEQVKzRu3gubq0RvfI0uUBIUGFr1xuMM0SVLlbiRWT38qftcM6Vqi+TRYTrlVhM/xdJKrqcO6D25iaUrGuE6b/oUP27N7GYQElYjgCECeVbU4ItHvhQkV87PHjmCbAqXgAAAABJRU5ErkJggg==" },
            ],
            kitchen: true,
            bedroom: false
        };
    },

    mounted() {

    },

    methods: {
        kitchenbtn() {
            this.kitchen = !this.kitchen;
            this.bedroom = !this.bedroom
        },
        bedroombtn() {
            this.bedroom = !this.bedroom;
            this.kitchen = !this.kitchen;

        }
    },
};
</script>

<style lang="scss" scoped>
.main {

    &_btn {
        width: 219px;
        height: 75px;
        padding: 9px 30px 9px 30px;
        border-radius: 18px;
        gap: 10px;
        font-family: Jost;
        font-size: 18px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: center;
        background-color: #CDA274;
        color:  #FFFFFF;
    }

    &_button {
        margin-top: 50px;
        margin-bottom: 50px;
        width: 500px;
        height: 100px;
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
    }
}

.mainSector {
    display: grid;
    gap: 131px;
    grid-template-columns: repeat(2, 0px);
    justify-items: center;
    justify-content: space-around;
    margin-bottom: 100px;
    &_img{
        padding-bottom: 20px;
    }
    &_h1{
        display: flex;
    }
    &_p{
        display: flex;
    }
    &_btn{
        position: relative;
    width: 70px;
    height: 70px;
    left: 235px;
    top: -60px;
    border-radius: 50%;
    background: #F4F0EC;
    }
}
</style>