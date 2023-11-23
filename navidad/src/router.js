import Inicio from "./Pages/Inicio.vue"
import Buscar from "./Pages/Buscar.vue"
import Imagen from "./Pages/Imagen.vue"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/", name: "Inicio",
        component: Inicio
    },
    {
        path: "/buscar", name: "Buscar", component: Buscar
    }
    ,
    {
        path: "/imagen", name: "Imagen", component: Imagen
    }
]
const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
);
export default router;