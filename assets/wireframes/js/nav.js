// Toggle

var navTop = document.querySelector('.nav-top');

document.querySelector('.nav-btn').addEventListener('click', function(e){
	e.preventDefault();	
	if (navTop.getAttribute('data-state') == 'expanded'){	
		navTop.setAttribute('data-state', 'collapsed');
		this.setAttribute('data-state', 'inactive');
	}else{	
		navTop.setAttribute('data-state', 'expanded');
		this.setAttribute('data-state', 'active');
	}
});

//Toggle stats

var specContent = document.querySelector('.spec-content')

document.querySelector('.spec-btn').addEventListener('click', function(e){
	e.preventDefault();	
	if (specContent.getAttribute('data-state') == 'expanded'){	
		specContent.setAttribute('data-state', 'collapsed');
		this.setAttribute('data-state', 'inactive');
	}else{	
		specContent.setAttribute('data-state', 'expanded');
		this.setAttribute('data-state', 'active');
	}
});

var perfContent = document.querySelector('.perf-content');

document.querySelector('.perf-btn').addEventListener('click', function(e){
	e.preventDefault();	
	if (perfContent.getAttribute('data-state') == 'expanded'){	
		perfContent.setAttribute('data-state', 'collapsed');
		this.setAttribute('data-state', 'inactive');
	}else{	
		perfContent.setAttribute('data-state', 'expanded');
		this.setAttribute('data-state', 'active');
	}
});

var overviewContent = document.querySelector('.over-content');

document.querySelector('.over-btn').addEventListener('click', function(e){
	e.preventDefault();	
	if (overviewContent.getAttribute('data-state') == 'expanded'){	
		overviewContent.setAttribute('data-state', 'collapsed');
		this.setAttribute('data-state', 'inactive');
	}else{	
		overviewContent.setAttribute('data-state', 'expanded');
		this.setAttribute('data-state', 'active');
	}
});

var expandContent = document.querySelector('.spec-btn')

document.querySelector('.expand').addEventListener('click', function(e){
	e.preventDefault();	
	if (expandContent.getAttribute('data-state') == 'expanded'){	
		expandContent.setAttribute('data-state', 'collapsed');
		this.setAttribute('data-state', 'inactive');
	}else{	
		expandContent.setAttribute('data-state', 'expanded');
		this.setAttribute('data-state', 'active');
	}
});
