export const mapLayers = [
  // ESSENTIAL BASE LAYERS
  {
    id: "provincial-boundary",
    name: "Provincial Boundary",
    description: "Outline of Tarlac Province - base layer for all other maps",
    category: "Administrative",
    thumbnail: "/provincial-boundary-map.jpg",
    datasets: ["provincial-boundary"],
    source: "PSA, NAMRIA, PhilGIS",
    lastUpdated: "Dec 2025",
  },
  {
    id: "municipal-boundaries",
    name: "Municipal/City Boundaries",
    description: "17 municipalities + Tarlac City for local statistics breakdown",
    category: "Administrative",
    thumbnail: "/municipal-boundaries-map.jpg",
    datasets: ["municipal-boundaries"],
    source: "PSA, NAMRIA, PhilGIS",
    lastUpdated: "Dec 2025",
  },
  {
    id: "barangay-boundaries",
    name: "Barangay Boundaries",
    description: "All barangays of Tarlac - useful for planning, demographics, disaster response",
    category: "Administrative",
    thumbnail: "/barangay-boundaries-map.jpg",
    datasets: ["barangay-boundaries"],
    source: "PSA, NAMRIA, PhilGIS",
    lastUpdated: "Dec 2025",
  },
  {
    id: "road-network",
    name: "Road Network",
    description: "National highways (SCTEX, MacArthur), provincial and municipal/barangay roads",
    category: "Infrastructure",
    thumbnail: "/road-network-map.jpg",
    datasets: ["national-highways", "provincial-roads", "municipal-roads"],
    source: "DPWH, OpenStreetMap",
    lastUpdated: "Nov 2025",
  },
  {
    id: "rivers-water-bodies",
    name: "Rivers & Water Bodies",
    description: "Tarlac River, O'Donnell River, Sacobia River, dams, reservoirs",
    category: "Environment",
    thumbnail: "/rivers-water-bodies-map.jpg",
    datasets: ["rivers", "dams", "reservoirs"],
    source: "NAMRIA, Phivolcs",
    lastUpdated: "Nov 2025",
  },
  // OPTIONAL DEVELOPMENT/PLANNING LAYERS
  {
    id: "land-use",
    name: "Land Use Classification",
    description: "Agricultural areas, built-up zones, forest/LNIP, protected areas for planning and zoning",
    category: "Environment",
    thumbnail: "/land-use-map.jpg",
    datasets: ["land-classification", "forest-cover", "protected-areas"],
    source: "NAMRIA, DENR",
    lastUpdated: "Sep 2025",
  },
  {
    id: "elevation-terrain",
    name: "Elevation / Terrain / Slope (DEM)",
    description: "Terrain visualization showing lowlands vs mountains (Mt. Pinatubo, Bamban, Capas)",
    category: "Environment",
    thumbnail: "/elevation-terrain-map.jpg",
    datasets: ["dem-data", "slope-analysis"],
    source: "SRTM, NAMRIA",
    lastUpdated: "Aug 2025",
  },
  {
    id: "hazard-maps",
    name: "Hazard Maps",
    description: "Flood susceptibility, landslide susceptibility, active faults, liquefaction",
    category: "Disaster Risk",
    thumbnail: "/hazard-maps.jpg",
    datasets: ["flood-susceptibility", "landslide-susceptibility", "active-faults", "liquefaction"],
    source: "NAMRIA, Phivolcs, OCD",
    lastUpdated: "Nov 2025",
  },
  {
    id: "population-density",
    name: "Population Density Heatmap",
    description: "PSA census distribution per barangay for health, education, disaster relief planning",
    category: "Demographics",
    thumbnail: "/population-density-map.jpg",
    datasets: ["population-census", "barangay-population"],
    source: "PSA",
    lastUpdated: "Nov 2025",
  },
  {
    id: "public-facilities",
    name: "Public Facilities",
    description: "Schools, health centers, hospitals, police/fire stations, evacuation centers, govt offices",
    category: "Services",
    thumbnail: "/public-facilities-map.jpg",
    datasets: ["schools", "health-facilities", "emergency-services", "govt-offices"],
    source: "DepEd, DOH, Local Govt",
    lastUpdated: "Dec 2025",
  },
  // ADVANCED SMART PROVINCE LAYERS
  {
    id: "satellite-imagery",
    name: "Satellite Imagery / Orthophotos",
    description: "High-resolution basemaps for visualization and planning",
    category: "Imagery",
    thumbnail: "/satellite-imagery.jpg",
    datasets: ["satellite-imagery", "orthophotos"],
    source: "Google, Mapbox, ESRI, Sentinel, NAMRIA",
    lastUpdated: "Nov 2025",
  },
  {
    id: "infrastructure-projects",
    name: "Infrastructure & Projects",
    description: "Provincial roads under repair, ongoing construction, completed projects, bidding status",
    category: "Infrastructure",
    thumbnail: "/infrastructure-projects.jpg",
    datasets: ["construction-projects", "maintenance-status"],
    source: "DPWH, Local Govt, PMS",
    lastUpdated: "Dec 2025",
  },
  {
    id: "agriculture-layers",
    name: "Agriculture Data",
    description: "Crop distribution, irrigation networks, soil maps, farm-to-market roads",
    category: "Agriculture",
    thumbnail: "/agriculture-layers.jpg",
    datasets: ["crop-distribution", "irrigation-systems", "soil-maps"],
    source: "DA, LGU",
    lastUpdated: "Oct 2025",
  },
  {
    id: "business-economic",
    name: "Business & Economic Activity",
    description: "Business establishments (DTI permits), industrial zones, commercial centers",
    category: "Economy",
    thumbnail: "/business-economic.jpg",
    datasets: ["business-establishments", "industrial-zones", "commercial-centers"],
    source: "DTI, BIR",
    lastUpdated: "Nov 2025",
  },
  {
    id: "environment-protected",
    name: "Environmental & Protected Areas",
    description: "Ancestral domains, watershed boundaries, reforestation zones, biodiversity areas",
    category: "Environment",
    thumbnail: "/environment-protected.jpg",
    datasets: ["ancestral-domains", "watersheds", "biodiversity-areas"],
    source: "DENR, NCIP",
    lastUpdated: "Oct 2025",
  },
  // TOURISM & PUBLIC USE
  {
    id: "tourism-map",
    name: "Tourism Attractions",
    description: "Tourist spots (Monasterio, Mt. Pinatubo jump-off), hotels, restaurants, tourist circuits",
    category: "Tourism",
    thumbnail: "/tourism-map.jpg",
    datasets: ["tourist-spots", "hotels", "restaurants", "tourist-circuits"],
    source: "Tourism Board, Local Govt",
    lastUpdated: "Nov 2025",
  },
  {
    id: "transportation",
    name: "Transportation Network",
    description: "Bus terminals, jeep/tricycle routes, SCTEX points, proposed transport lines",
    category: "Transportation",
    thumbnail: "/transportation-network.jpg",
    datasets: ["bus-terminals", "transport-routes", "sctex-points"],
    source: "LTFRB, DPWH",
    lastUpdated: "Dec 2025",
  },
]

export const gisDatasets = [
  {
    id: "barangay-boundaries-geojson",
    name: "Barangay Boundaries",
    format: "GeoJSON",
    size: "12 MB",
    description: "Official administrative boundaries of all barangays",
  },
  {
    id: "municipality-boundaries-geojson",
    name: "Municipality Boundaries",
    format: "GeoJSON",
    size: "3.2 MB",
    description: "Municipal boundaries with land area data",
  },
  {
    id: "road-network-geojson",
    name: "Road Network",
    format: "GeoJSON",
    size: "35 MB",
    description: "Complete road network with classification",
  },
  {
    id: "rivers-geojson",
    name: "Rivers & Water Bodies",
    format: "GeoJSON",
    size: "8.5 MB",
    description: "Major rivers, creeks, and water bodies",
  },
  {
    id: "schools-geojson",
    name: "School Locations",
    format: "GeoJSON",
    size: "1.2 MB",
    description: "Point data for all schools",
  },
  {
    id: "health-facilities-geojson",
    name: "Health Facilities",
    format: "GeoJSON",
    size: "800 KB",
    description: "Point data for health facilities",
  },
]
// MOCK GEOJSON DATA FOR ALL LAYERS

// 1. Provincial Boundary (simplified polygon)
export const provincialBoundaryGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { 
        name: "Tarlac Province",
        area_km2: 3080.1,
        region: "Central Luzon",
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.45, 15.30],
          [120.75, 15.30],
          [120.75, 15.65],
          [120.45, 15.65],
          [120.45, 15.30],
        ]],
      },
    },
  ],
}

// 2. Municipal Boundaries
export const municipalBoundariesGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Tarlac City", type: "city", population: 345000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.58, 15.47],
          [120.62, 15.47],
          [120.62, 15.51],
          [120.58, 15.51],
          [120.58, 15.47],
        ]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Bamban", type: "municipality", population: 78000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.48, 15.35],
          [120.55, 15.35],
          [120.55, 15.42],
          [120.48, 15.42],
          [120.48, 15.35],
        ]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Capas", type: "municipality", population: 62000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.63, 15.35],
          [120.70, 15.35],
          [120.70, 15.42],
          [120.63, 15.42],
          [120.63, 15.35],
        ]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Concepcion", type: "municipality", population: 45000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.48, 15.52],
          [120.55, 15.52],
          [120.55, 15.59],
          [120.48, 15.59],
          [120.48, 15.52],
        ]],
      },
    },
  ],
}

// 3. Barangay Boundaries (sample)
export const barangayBoundariesGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "San Fernando", municipality: "Tarlac City", population: 28000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.58, 15.47],
          [120.60, 15.47],
          [120.60, 15.49],
          [120.58, 15.49],
          [120.58, 15.47],
        ]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Lanao", municipality: "Tarlac City", population: 35000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.60, 15.47],
          [120.62, 15.47],
          [120.62, 15.49],
          [120.60, 15.49],
          [120.60, 15.47],
        ]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Sta. Ignacia", municipality: "Tarlac City", population: 32000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.58, 15.49],
          [120.60, 15.49],
          [120.60, 15.51],
          [120.58, 15.51],
          [120.58, 15.49],
        ]],
      },
    },
  ],
}

// 4. Road Network
export const roadNetworkGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "SCTEX", type: "national-highway", condition: "good" },
      geometry: {
        type: "LineString",
        coordinates: [[120.45, 15.50], [120.75, 15.50]],
      },
    },
    {
      type: "Feature",
      properties: { name: "MacArthur Highway", type: "national-highway", condition: "good" },
      geometry: {
        type: "LineString",
        coordinates: [[120.60, 15.30], [120.60, 15.65]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Provincial Road A", type: "provincial-road", condition: "fair" },
      geometry: {
        type: "LineString",
        coordinates: [[120.50, 15.40], [120.65, 15.55]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Municipal Road B", type: "municipal-road", condition: "maintenance" },
      geometry: {
        type: "LineString",
        coordinates: [[120.58, 15.47], [120.62, 15.51]],
      },
    },
  ],
}

// 5. Rivers & Water Bodies
export const riversWaterBodiesGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Tarlac River", type: "river", length_km: 89.5 },
      geometry: {
        type: "LineString",
        coordinates: [[120.48, 15.32], [120.62, 15.58]],
      },
    },
    {
      type: "Feature",
      properties: { name: "O'Donnell River", type: "river", length_km: 34 },
      geometry: {
        type: "LineString",
        coordinates: [[120.68, 15.35], [120.70, 15.50]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Sacobia River", type: "river", length_km: 45 },
      geometry: {
        type: "LineString",
        coordinates: [[120.45, 15.38], [120.55, 15.48]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Ambuklao Dam", type: "dam", capacity_mcm: 400 },
      geometry: {
        type: "Point",
        coordinates: [120.62, 15.32],
      },
    },
  ],
}

// 6. Land Use Classification
export const landUseGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Agricultural Area 1", type: "agricultural", area_hectares: 15000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.48, 15.35],
          [120.52, 15.35],
          [120.52, 15.40],
          [120.48, 15.40],
          [120.48, 15.35],
        ]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Built-up Zone", type: "built-up", area_hectares: 8500 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.58, 15.47],
          [120.63, 15.47],
          [120.63, 15.52],
          [120.58, 15.52],
          [120.58, 15.47],
        ]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Protected Forest", type: "forest", area_hectares: 12000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.68, 15.38],
          [120.72, 15.38],
          [120.72, 15.45],
          [120.68, 15.45],
          [120.68, 15.38],
        ]],
      },
    },
  ],
}

// 7. Elevation/Terrain (simplified as point data)
export const elevationGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Lowland", elevation_m: 150, type: "lowland" },
      geometry: {
        type: "Point",
        coordinates: [120.60, 15.50],
      },
    },
    {
      type: "Feature",
      properties: { name: "Mt. Pinatubo", elevation_m: 1485, type: "mountain" },
      geometry: {
        type: "Point",
        coordinates: [120.53, 15.13],
      },
    },
    {
      type: "Feature",
      properties: { name: "Bamban Highland", elevation_m: 800, type: "highland" },
      geometry: {
        type: "Point",
        coordinates: [120.50, 15.36],
      },
    },
  ],
}

// 8. Hazard Maps
export const hazardMapsGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Flood Susceptibility High", type: "flood", risk_level: "high", probability: "likely" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.59, 15.49],
          [120.61, 15.49],
          [120.61, 15.51],
          [120.59, 15.51],
          [120.59, 15.49],
        ]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Landslide Susceptibility", type: "landslide", risk_level: "moderate", trigger: "rainfall" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.50, 15.35],
          [120.54, 15.35],
          [120.54, 15.39],
          [120.50, 15.39],
          [120.50, 15.35],
        ]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Active Fault Line", type: "fault", depth_km: 12 },
      geometry: {
        type: "LineString",
        coordinates: [[120.45, 15.40], [120.70, 15.50]],
      },
    },
  ],
}

// 9. Population Density (as points with density values)
export const populationDensityGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { barangay: "Lanao", population: 35000, density_per_km2: 8750 },
      geometry: {
        type: "Point",
        coordinates: [120.60, 15.48],
      },
    },
    {
      type: "Feature",
      properties: { barangay: "San Fernando", population: 28000, density_per_km2: 7000 },
      geometry: {
        type: "Point",
        coordinates: [120.59, 15.47],
      },
    },
    {
      type: "Feature",
      properties: { barangay: "Capas", population: 62000, density_per_km2: 5200 },
      geometry: {
        type: "Point",
        coordinates: [120.67, 15.39],
      },
    },
  ],
}

// 10. Public Facilities
export const publicFacilitiesGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Tarlac National High School", type: "school", students: 2500 },
      geometry: {
        type: "Point",
        coordinates: [120.595, 15.482],
      },
    },
    {
      type: "Feature",
      properties: { name: "Central Luzon State Hospital", type: "hospital", beds: 450 },
      geometry: {
        type: "Point",
        coordinates: [120.603, 15.489],
      },
    },
    {
      type: "Feature",
      properties: { name: "Police Station District 1", type: "police_station", personnel: 85 },
      geometry: {
        type: "Point",
        coordinates: [120.600, 15.485],
      },
    },
    {
      type: "Feature",
      properties: { name: "Fire Station Main", type: "fire_station", capacity: 60 },
      geometry: {
        type: "Point",
        coordinates: [120.592, 15.478],
      },
    },
    {
      type: "Feature",
      properties: { name: "Provincial Capitol", type: "government_office", employees: 500 },
      geometry: {
        type: "Point",
        coordinates: [120.590, 15.490],
      },
    },
  ],
}

// 11. Infrastructure & Projects
export const infrastructureProjectsGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "MacArthur Highway Expansion", type: "ongoing", status: "50% complete", budget_million: 85 },
      geometry: {
        type: "LineString",
        coordinates: [[120.60, 15.30], [120.60, 15.40]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Bridge Construction - Sacobia", type: "ongoing", status: "75% complete", budget_million: 45 },
      geometry: {
        type: "Point",
        coordinates: [120.50, 15.40],
      },
    },
    {
      type: "Feature",
      properties: { name: "Road Maintenance - Provincial Road", type: "maintenance", status: "completed", budget_million: 12 },
      geometry: {
        type: "LineString",
        coordinates: [[120.50, 15.45], [120.55, 15.50]],
      },
    },
  ],
}

// 12. Agriculture Data
export const agricultureDataGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { crop: "Rice", area_hectares: 45000, production_tons: 225000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.48, 15.35],
          [120.56, 15.35],
          [120.56, 15.45],
          [120.48, 15.45],
          [120.48, 15.35],
        ]],
      },
    },
    {
      type: "Feature",
      properties: { type: "irrigation_system", name: "Pantabangan-Masibi Irrigation", coverage_hectares: 32000 },
      geometry: {
        type: "LineString",
        coordinates: [[120.50, 15.40], [120.52, 15.42], [120.54, 15.44]],
      },
    },
  ],
}

// 13. Business & Economic Activity
export const businessEconomicGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Tarlac Industrial Zone", type: "industrial", companies: 45, jobs: 8500 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.65, 15.45],
          [120.70, 15.45],
          [120.70, 15.50],
          [120.65, 15.50],
          [120.65, 15.45],
        ]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Downtown Business District", type: "commercial", shops: 250, employees: 2000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.58, 15.47],
          [120.62, 15.47],
          [120.62, 15.51],
          [120.58, 15.51],
          [120.58, 15.47],
        ]],
      },
    },
  ],
}

// 14. Environmental & Protected Areas
export const environmentProtectedGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Iwisan Ancestral Domain", type: "ancestral_domain", area_hectares: 25000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.45, 15.30],
          [120.50, 15.30],
          [120.50, 15.35],
          [120.45, 15.35],
          [120.45, 15.30],
        ]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Upper Tarlac Watershed", type: "watershed", area_hectares: 35000 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.50, 15.35],
          [120.55, 15.35],
          [120.55, 15.42],
          [120.50, 15.42],
          [120.50, 15.35],
        ]],
      },
    },
  ],
}

// 15. Tourism Attractions
export const tourismGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Monasterio de Tarlac", type: "tourist_spot", rating: 4.8, visitors_annual: 150000 },
      geometry: {
        type: "Point",
        coordinates: [120.587, 15.512],
      },
    },
    {
      type: "Feature",
      properties: { name: "Mt. Pinatubo Jump-off", type: "tourist_spot", rating: 4.7, visitors_annual: 45000 },
      geometry: {
        type: "Point",
        coordinates: [120.53, 15.15],
      },
    },
    {
      type: "Feature",
      properties: { name: "Tarlac Hotel & Resort", type: "hotel", rooms: 120, rating: 4.5 },
      geometry: {
        type: "Point",
        coordinates: [120.600, 15.488],
      },
    },
    {
      type: "Feature",
      properties: { name: "Camiling Food Circuit", type: "tourist_circuit", length_km: 15 },
      geometry: {
        type: "LineString",
        coordinates: [[120.58, 15.47], [120.62, 15.51]],
      },
    },
  ],
}

// 16. Transportation Network
export const transportationGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Tarlac City Bus Terminal", type: "bus_terminal", daily_trips: 450, capacity_persons: 8500 },
      geometry: {
        type: "Point",
        coordinates: [120.595, 15.480],
      },
    },
    {
      type: "Feature",
      properties: { name: "SCTEX North Exit", type: "sctex_point", type_exit: "toll" },
      geometry: {
        type: "Point",
        coordinates: [120.45, 15.50],
      },
    },
    {
      type: "Feature",
      properties: { name: "SCTEX South Exit", type: "sctex_point", type_exit: "toll" },
      geometry: {
        type: "Point",
        coordinates: [120.75, 15.50],
      },
    },
    {
      type: "Feature",
      properties: { name: "Proposed LRT Extension", type: "proposed_transport", status: "planning", length_km: 35 },
      geometry: {
        type: "LineString",
        coordinates: [[120.45, 15.50], [120.75, 15.50]],
      },
    },
  ],
}