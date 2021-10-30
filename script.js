const url = "datas.csv";
const taxonomy = {
    DataType: ["Time serials", "Record Data", "Network", "Vector Data", "Geospatial Data", "Square Cylinder Data", "Spatio-Temporal Data", "Prediction Data", "Event Sequence Data", "High Dimensional Data","None"],
    Visualisation: ["3D Visualization", "Tree map", "Flow Visualization", "Timeline", "Direct volume rendering", "SOM", "Pathfinder network scaling techniques", "Multiscale Visualization", "Animations", "The node-link graph", "Lattice Boltzmann Model", "Network Visualization", "3D Morphing", "Treemaps", "Tree Visualization", "Spatial Graphs", "Spiral Axis", "Direct Point Visualization", "Clusters", "Scatterplot", "Point Map", "Graph", "Maps", "Heatmap", "Histogram", "Bar Chart", "Layered Graph", "Set Diagrams", "Force-directed graph", "None"],
    Interaction: ["Select", "Explore", "Reconfigure", "Encode", "Abstract", "Elaborate", "Filter", "Connect", "Zoom", "None"],
    Machine_Learning: ["T-SNE", "GMM", "K-Means", "Vortex Core Tracing Algorithm", "steepest descent algorithm", "Stochastic Search Techniques", "SOM", "MDS", "Pathfinder networks", "Boids", "Horn's algorithm", "Majority Vote Algorithm", "SPH", "Molecule Cluster Detection Algorithm", "Region Growing paradigm", "DBSCAN", "TF-IDF", "FR", "GA", "Max-product", "TRT", "Region Growing", "AHC", "k-clique", "HMM", "Farneback", "Adaptive Ranking Algorithm", "UMAP", "Hash Algorithms", "GO-NTG", "PCA", "Fuzzy Rule-based Pattern Learning Algorithm", "XGBoost", "None"],
    Dimension:["2D", "3D", "Hybrid"],
    PaperType: ["C", "J"],
    Evolution_Types: ["Time Evolution", "Network Evolution", "Feature Evolution", "Data Evolution", "Structural Evolution", "Dynamic Tree Evolution", "Models Evolution", "Field Evolution", "Clustering Evolution", "geometric evolution", "Space Evolution", "Evolutionary Trees", "Evolution View", "Three Dimensional Evolution", "Group Evolution", "Topological Evolution", "Topic Evolution", "Uncertainty Evolution", "Flow Evolution", "Dynamic Evolution","Spatiotemporal Evolution","Plots Evolution","Interactive Evolutionary"],
    DataSource: ["Open source data", "Computer Simulation", "Business company data", "the FIFA World Cup Competition", "visualization applet", "ECMWF", "the SciVis 2016 Contest organizers", "EU Copernicus project", "Bank", "time varying stochastic fractal"],
    Conference: ["Vis", "InfoVis", "VAST", "SciVis", "PacificVis", "EuroVis"],
    Evolution_Aims: ["visualization analysis", "Time-Feature Extraction", "visual forecast", "solve discontinuous nature of the data", "hypertext field", "smooth discretized surfaces", "network visualization analysis", "steamline visualization analysis", "tensor Visualization analysis", "Cluster detection analysis", "Evolutionary Algorithm analysis", "flow visualization analysis", "Wavelet analysis", "uncertainty information analysis", "Hierarchical topic visualization", "Time-varying data analysis", "Bitcoin transaction analysis", "Scientific Fields", "Topological Data Analysis", "Storyline visualization analysis", "Evolutionary Visual Exploration", "Cosmological N-body Simulation Analysis"],
    Title: ["PlotThread: Creating Expressive Storyline Visualizations using Reinforcement Learning",
            "Objective Observer-Relative Flow Visualization in Curved Spaces for Unsteady 2D Geophysical Flows",
            "Efficient Morphing of Shape-preserving Star Coordinates",
            "Distribution-based Particle Data Reduction for In-situ Analysis and Visualization of Large-scale N-body Cosmological Simulations",
            "Galex: Exploring the Evolution and Intersection of Disciplines",
            "A Comparison of Visualizations for Identifying Correlation over Space and Time",
            "GenerativeMap: Visualization and Exploration of Dynamic Density Maps via Generative Learning Model",
            "Dynamic Nested Tracking Graphs",
            "EmoCo: Visual Analysis of Emotion Coherence in Presentation Videos",
            "GPGPU Linear Complexity t-SNE Optimization",
            "Optimizing Stepwise Animation in Dynamic Set Diagrams",
            "Visual Analysis of the Temporal Evolution of Ensemble Forecast Sensitivities",
            "Segue: Overviewing Evolution Patterns of Egocentric Networks by Interactive Construction of Spatial Layouts",
            "Temporal Treemaps: Static Visualization of Evolving Trees",
            "Details-First, Show Context, Overview Last: Supporting Exploration of Viscous Fingers in Large-Scale Ensemble Simulations",
            "BitExTract: Interactive Visualization for Extracting Bitcoin Exchange Intelligence",
            "Visual Progression Analysis of Event Sequence Data",
            "VIS Author Profiles: Interactive Descriptions of Publication Records Combining Text and Visualization",
            "ForVizor: Visualizing Spatio-Temporal Team Formations in Soccer",
            "Visualizing the Phase Space of Heterogeneous Inertial Particles in 2D Flows",
            "In Situ Prediction Driven Feature Analysis in Jet Engine Simulations",
            "Visual analytics for networked-guarantee loans risk management",
            "Clique Community Persistence: A Topological Visual Analysis Approach for Complex Networks",
            "Understanding a Sequence of Sequences: Visual Exploration of Categorical States in Lake Sediment Cores",
            "EventThread: Visual Summarization and Stage Analysis of Event Sequence Data",
            "Nested Tracking Graphs",
            "Exploring Controversy via Sentiment Divergences of Aspects in Reviews",
            "Exploring the Evolution of Pressure-Perturbations to Understand Atmospheric Phenomena",
            "Time-Hierarchical Clustering and Visualization of Weather Forecast Ensembles",
            "In Situ Distribution Guided Analysis and Visualization of Transonic Jet Engine Simulations",
            "A Visual Analytics Approach for Understanding Reasons behind Snowballing and Comeback in MOBA Games",
            "A Visual Analytics Framework for Microblog Data Analysis at Multiple Scales of Aggregation",
            "HTMVS: Visualizing hierarchical topics and their evolution",
            "Visualization, Selection, and Analysis of Traffic Flows",
            "Off the Radar: Comparative Evaluation of Radial Visualization Solutions for Composite Indicators",
            "Time Curves: Folding Time to Visualize Patterns of Temporal Evolution in Data",
            "Visual Verification of Space Weather Ensemble Simulations",
            "Real-time interactive time correction on the GPU",
            "Distribution Driven Extraction and Tracking of Features for Time-varying Data Analysis",
            "NeuroBlocks - Visual Tracking of Segmentation and Proofreading for Large Connectomics Projects",
            "egoSlider: Visual Analysis of Egocentric Network Evolution",
            "Wavelet-based visualization of time-varying data on graphs",
            "Reducing Snapshots to Points: A Visual Analytics Approach to Dynamic Network Exploration",
            "Finite-Time Mass Separation for Comparative Visualizations of Inertial Particles",
            "How Hierarchical Topics Evolve in Large Text Corpora",
            "Trajectory-Based Flow Feature Tracking in Joint Particle/Volume Datasets",
            "BoundarySeer: Visual Analysis of 2D Boundary Changes",
            "Maps of Computer Science",
            "DiffAni: Visualizing Dynamic Graphs with a Hybrid of Difference Maps and Animation",
            "HierarchicalTopics: Visually Exploring Large Text Collections Using Topic Hierarchies",
            "Evolutionary Visual Exploration: Evaluation With Expert Users",
            "A case study: Tracking and visualizing the evolution of dark matter halos and groups of satellite halos in cosmology simulations",
            "Design Considerations for Optimizing Storyline Visualizations",
            "RankExplorer: Visualization of Ranking Changes in Large Time Series Data",
            "Visualizing Flow of Uncertainty through Analytical Processes",
            "Surface-Based Structure Analysis and Visualization for Multifield Time-Varying Datasets",
            "Visual analytics methods for categoric spatio-temporal data",
            "Parallel Edge Splatting for Scalable Dynamic Graph Visualization",
            "TextFlow: Towards Better Understanding of Evolving Topics in Text",
            "Interactive visual comparison of multiple trees",
            "ParallelTopics: A probabilistic approach to exploring document collections",
            "TransGraph: Hierarchical Exploration of Transition Relationships in Time-Varying Volumetric Data",
            "Two-Dimensional Time-Dependent Vortex Regions Based on the Acceleration Magnitude",
            "Understanding text corpora with multiple facets",
            "Interactive Separating Streak Surfaces",
            "Result-Driven Exploration of Simulation Parameter Spaces for Visual Effects Design",
            "Describing story evolution from dynamic information streams",
            "Geovisual analytics for self-organizing network data",
            "ProcessLine: Visualizing time-series data in process industry",
            "Applying Manifold Learning to Plotting Approximate Contour Trees",
            "Interactive Coordinated Multiple-View Visualization of Biomechanical Motion Data",
            "Time and Streak Surfaces for Flow Visualization in Large Time-Varying Data Sets",
            "Visual Exploration of Climate Variability Changes Using Wavelet Analysis",
            "Crystal structures classifier for an evolutionary algorithm structure predictor",
            "Model-driven Visual Analytics",
            "Migrant boat mini challenge award: Simple and effective integrated display geo-temporal analysis of migrant boats",
            "Interactive Visualization and Analysis of Transitional Flow",
            "SpiralView: Towards Security Policies Assessment through Visual Correlation of Network Resources with Evolution of Alarms",
            "C-GROUP: A Visual Analytic Tool for Pairwise Analysis of Dynamic Group Membership",
            "Visual Analysis of Dynamic Networks with Geological Clustering",
            "Visualization of Cosmological Particle-Based Datasets",
            "Visual Verification and Analysis of Cluster Detection for Molecular Dynamics",
            "Time Tree: Exploring Time Changing Hierarchies",
            "Visual Exploration of Spatio-temporal Relationships for Scientific Data",
            "Techniques for the Visualization of Topological Defect Behavior in Nematic Liquid Crystals",
            "Understanding the Structure of the Turbulent Mixing Layer in Hydrodynamic Instabilities",
            "The visual code navigator: an interactive toolset for source code investigation",
            "Evolutionary morphing",
            "Visualizing the Evolution of Horned Lizards Using 3D Morphing Techniques",
            "Time-Varying Data Visualization Using Information Flocking Boids",
            "Tracking of vector field singularities in unstructured 3D time-dependent datasets",
            "Visualization of intricate flow structures for vortex breakdown analysis",
            "Visualizing evolving networks: minimum spanning trees versus pathfinder networks",
            "A texture-based framework for spacetime-coherent visualization of time-dependent vector fields",
            "SpaceTree: supporting exploration in large node link tree, design evolution and empirical evaluation",
            "Case study: visualizing sets of evolutionary trees",
            "Visual unrolling of network evolution and the analysis of dynamic discourse",
            "Simulating fire with texture splats",
            "Case study: Visualizing ocean flow vertical motions using Lagrangian-Eulerian time surfaces",
            "Rendering the first star in the Universe - A case study",
            "A continuous clustering method for vector fields",
            "Anisotropic geometric diffusion in surface processing",
            "Interactive visualization of particle-in-cell simulations",
            "Visualizing the evolution of a subject domain: a case study",
            "TOPIC ISLANDS TM - a wavelet-based text visualization system",
            "Case study: wildfire visualization",
            "Generation of Transfer Functions with Stochastic Search Technique",
            "Compression domain rendering of time-resolved volume data",
            "The topology of symmetric, second-order tensor fields",
            "3D visualization of unsteady 2D airplane wake vortices",
            "Visualizing chemical kinetics in fractal domains",
            "A visual analytics approach for understanding egocentric intimacy network evolution and impact propagation in MMORPGs"
    ]
};
const taxkeys = Object.keys(taxonomy);
const container = d3.select(".grid");

d3.csv(url)
	.then(function (data) {
	    console.log(data);
	    d3.selectAll("#count").text(data.length);
	    var total = {};
	    d3.select(".input_search").on("input", function () {
	        var filters = taxkeys.map(function (taxkey) {
	                var cats = [];
	                taxonomy[taxkey].forEach(function (cat) {
	                    searchtext = document.getElementById("search").value;
	                    if (taxkey == "Title") {
	                        cats.push(cat);
	                    }
	                    if (
                        document.querySelectorAll('.fs-option.selected').forEach(function (i) {
                            if ((i.getAttribute('data-value') == cat) &&
                                (i.parentElement.getElementsByClassName('fs-optgroup-label')[0].innerText == taxkey)
                            ) { cats.push(cat); }
	                    }
                        )
					) {
	                        console.log(cats);
	                    }
	                });
	            return [taxkey, cats];
	        });
	        console.log(filters);
	        refreshTechniques(filters);
	    })
	    //下拉框 更新
	    d3.selectAll(".fs-option").on("click", function () {
	            var $wrap = $(this).closest('.fs-wrap');
	            if ($wrap.hasClass('multiple')) {
	                var selected = [];
	                $(this).toggleClass('selected');
	                $wrap.find('.fs-option.selected').each(function (i, el) {
	                    selected.push($(el).attr('data-value'));
	                });
	            }
	            else {
	                var selected = $(this).attr('data-value');
	                $wrap.find('.fs-option').removeClass('selected');
	                $(this).addClass('selected');
	                $wrap.find('.fs-dropdown').hide();
	            }
	            $wrap.find('select').val(selected);
	            $wrap.find('select').fSelect('reloadDropdownLabel');
	            var filters = taxkeys.map(function (taxkey) {
	            var cats = [];
	            taxonomy[taxkey].forEach(function (cat) {
	                if (taxkey == "Title") {
	                    cats.push(cat);
	                }
	                if (
                        document.querySelectorAll('.fs-option.selected').forEach(function(i){
                            if ((i.getAttribute('data-value') == cat) &&
                                (i.parentElement.getElementsByClassName('fs-optgroup-label')[0].innerText == taxkey)
                            ) { cats.push(cat);}
	                    }
                        )
					) {
	                    console.log(cats);
	                }
	            });
	            return [taxkey, cats];
	            });
	        refreshTechniques(filters);
	    });
	    function refreshTechniques(filters) {
	        var fData = data.filter((d) => filterData(d, filters));
	        d3.select("#count").text(fData.length);
	        var ids = fData.map((d) => d.image);
	        d3.selectAll(".grid-item").style("display", (d) =>
	            ids.indexOf(d.image) != -1 ? null : "none"
			);
	        msnry.layout();
	    }

	    var div = container
			.selectAll("div")
			.data(data)
			.enter()
			.append("div")
			.classed("grid-item", true);

	    div.append("img").attr("src", (d) => "https:"+"//slmfy555.github.io/evonet.github.io/img/" + d.image + ".PNG");
	    div.append("h3").text((d) => d.Title);
	    div.append("span").html((d) =>
	        [
				d.Author,
				". <i>",
				d["Conference"],
				"</i> (",
				d["Year"],
				")",
				" <a href=" + d.URL + ' target="_blank">[Link]</a>',
				"<br>",
	        ].join("")
		);
	    var tags = div.append("div").style("margin-top", "7px");
	})
	.then(function () {
	    imagesLoaded(".grid", function () {
	        var elem = document.querySelector(".grid");
	        window.msnry = new Masonry(elem, {
	            // options
	            itemSelector: ".grid-item",
	            columnWidth: 240,
	            gutter: 15,
	        });
	    });
	})
	.catch(function (error) {
	    throw error;
	});


function filterData(d, filters) {
    return (
    filters.every(function (fil) {
        
        if (fil[0] == "Title") {
            searchtext = document.getElementById("search").value;
            if (fil[1].length == 0 || d[fil[0]].indexOf(searchtext) != -1) {
                        return true;
            }
        }
        else {
            return fil[1].length == 0 || fil[1].indexOf(d[fil[0]]) != -1;
        }

    })
);
}


/*function buttonClick() {
    var menuSpan = document.querySelectorAll(".menuh4");
    var parentDiv = this.parentNode;
    if (parentDiv.querySelectorAll(".collasped").length != 0)
    {
        d3.select(parentDiv).selectAll(".collasped")
        .attr("class", "checkbox-container");
    }
    else {
        d3.select(parentDiv).selectAll(".checkbox-container")
          .attr("class", "collasped")
    }
}*/



