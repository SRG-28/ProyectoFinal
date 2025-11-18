<template>
  <div class="p-8 container mx-auto text-center">
    <!-- Header -->
    <header class="mb-16 relative z-10">
      <h1 class="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-text">
        ✈️ Catálogo de Aviones Comerciales
      </h1>
      <h2 class="text-2xl text-purple-700 mb-6">Explora modelos, fabricantes y aerolíneas</h2>
      <p class="text-base text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
        Descubre los aviones más emblemáticos de la aviación comercial. Haz click en cualquier avión, aerolínea o fabricante para ver sus detalles completos.
      </p>
    </header>

    <!-- Aviones -->
    <section class="mb-16 relative rounded-3xl overflow-hidden">
      <div class="absolute inset-0 w-full h-full overflow-hidden">
        <img src="/default-plane.jpg" alt="Fondo sección" class="w-full h-full object-cover opacity-30 blur-sm" />
      </div>

      <h2 class="text-3xl font-bold mb-8 flex items-center justify-center gap-3 relative z-10">
        ✈️ Aviones
      </h2>

      <ul class="grid gap-10 relative z-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li v-for="item in airplanes" :key="item.id">
          <NuxtLink
            :to="`/airplane/${item.id}`"
            class="group relative flex flex-col justify-end rounded-3xl shadow-xl overflow-hidden transition-transform duration-500 transform hover:scale-105 hover:-translate-y-2 h-72 bg-white border border-gray-300"
            @mousemove="tilt($event)"
            @mouseleave="resetTilt($event)"
          >

            <!-- Imagen del avión -->
            <div class="absolute inset-0 w-full h-full opacity-40">
              <img
                v-if="item.imagen"
                :src="item.imagen"
                :alt="item.modelo"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="relative p-6 z-10 flex flex-col items-center justify-end h-full">
              <h3 class="text-lg font-bold group-hover:text-yellow-400 transition-colors">
                {{ item.modelo }}
              </h3>

              <!-- Precio -->
              <p class="text-sm mt-2 text-gray-800 font-semibold group-hover:text-indigo-500 transition">
                {{ formatPrice(item.precio) }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <!-- Botones -->
    <div class="flex justify-center gap-4 mb-8">
      <button
        @click="showAirlines = !showAirlines"
        class="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
      >
        {{ showAirlines ? 'Ocultar' : 'Mostrar' }} Aerolíneas
      </button>

      <button
        @click="showManufacturers = !showManufacturers"
        class="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
      >
        {{ showManufacturers ? 'Ocultar' : 'Mostrar' }} Fabricantes
      </button>
    </div>

    <!-- Aerolíneas -->
    <section v-show="showAirlines" class="mb-16 relative rounded-3xl overflow-hidden transition-all duration-500">
      <div class="absolute inset-0 w-full h-full overflow-hidden">
        <img src="/default-airline.jpg" alt="Fondo aerolíneas" class="w-full h-full object-cover opacity-30 blur-sm" />
      </div>

      <h2 class="text-3xl font-bold mb-8 flex items-center justify-center gap-3 relative z-10">🛫 Aerolíneas</h2>

      <ul class="grid gap-10 relative z-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li v-for="item in airlines" :key="item.id">
          <NuxtLink
            :to="`/airline/${item.id}`"
            class="group relative flex flex-col justify-end rounded-3xl shadow-xl overflow-hidden transition-transform duration-500 transform hover:scale-105 hover:-translate-y-2 h-72 bg-white border border-gray-200"
          >

            <!-- LOGO aerolínea -->
            <div class="absolute inset-0 w-full h-full opacity-40">
              <img
                v-if="item.imagen"
                :src="item.imagen"
                :alt="item.nombre"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="relative p-6 z-10 flex flex-col items-center justify-end h-full mt-6">
              <h3 class="text-lg font-bold group-hover:text-yellow-400 transition-colors text-center">
                {{ item.nombre }}
              </h3>
            </div>

          </NuxtLink>
        </li>
      </ul>
    </section>

    <!-- Fabricantes -->
    <section v-show="showManufacturers" class="mb-16 relative rounded-3xl overflow-hidden transition-all duration-500">
      <div class="absolute inset-0 w-full h-full overflow-hidden">
        <img src="/default-manufacturer.jpg" alt="Fondo fabricantes" class="w-full h-full object-cover opacity-30 blur-sm" />
      </div>

      <h2 class="text-3xl font-bold mb-8 flex items-center justify-center gap-3 relative z-10">🏭 Fabricantes</h2>

      <ul class="grid gap-10 relative z-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li v-for="item in manufacturers" :key="item.id">
          <NuxtLink
            :to="`/airplanemanufacturer/${item.id}`"
            class="group relative flex flex-col justify-end rounded-3xl shadow-xl overflow-hidden transition-transform duration-500 transform hover:scale-105 hover:-translate-y-2 h-72 bg-white border border-gray-200"
          >

            <!-- Imagen del fabricante -->
            <div class="absolute inset-0 w-full h-full opacity-40">
              <img
                v-if="item.imagen"
                :src="item.imagen"
                :alt="item.nombre"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="relative p-6 z-10 flex flex-col items-center justify-end h-full mt-6">
              <h3 class="text-lg font-bold group-hover:text-yellow-400 transition-colors text-center">
                {{ item.nombre }}
              </h3>
            </div>

          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/* Traer datos incluyendo imagen REAL */
const airplanes = await queryContent('/airplanes')
  .only(['id', 'modelo', 'imagen', 'precio'])
  .find()

const airlines = await queryContent('/airlines')
  .only(['id', 'nombre', 'imagen'])   // ← CORREGIDO
  .find()

const manufacturers = await queryContent('/airplanemanufacturer')
  .only(['id', 'nombre', 'imagen'])   // ← CORREGIDO
  .find()

const showAirlines = ref(false)
const showManufacturers = ref(false)

/* Función para Precio */
function formatPrice(value) {
  if (!value) return "No disponible"
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value)
}

/* Efecto tilt */
function tilt(e) {
  const el = e.currentTarget
  const width = el.offsetWidth
  const height = el.offsetHeight
  const centerX = width / 2
  const centerY = height / 2
  const mouseX = e.offsetX
  const mouseY = e.offsetY
  const rotateX = ((mouseY - centerY) / centerY) * 8
  const rotateY = ((mouseX - centerX) / centerX) * -8
  el.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

function resetTilt(e) {
  const el = e.currentTarget
  el.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)'
}
</script>

<style scoped>
@keyframes text-gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-text {
  background-size: 200% 200%;
  animation: text-gradient 5s ease infinite;
}
</style>
