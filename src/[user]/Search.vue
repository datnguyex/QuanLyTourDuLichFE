<template>
    <div class="py-2 px-4">
        <div class="text-sm text-gray-500">
            <span class="text-gray-700">
                Xperience
            </span>
            /
            <span class="text-blue-500">
                Kết quả Tìm kiếm
            </span>
        </div>
        <div class="flex items-center mt-2">
            <div class="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                <i class="fas fa-map-marker-alt text-red-500">
                </i>
                <span class="ml-2 text-red-500">
                    All Locations
                </span>
                <i class="fas fa-chevron-down ml-2 text-gray-500">
                </i>
            </div>
            <div class="flex items-center ml-4 border rounded-full px-4 py-2">
                <input class="outline-none" placeholder="Sunworld Bà Nà Hills" type="text" />
                <i class="fas fa-times text-gray-500 ml-2">
                </i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchTour"
}
</script>