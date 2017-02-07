export default function() {
    this.namespace = '/api';

    let projects = [{
            type: 'projects',
            id: 'frida',
            attributes: {
                title: 'Frida',
                owner: 'Veruca Salt',
                city: 'San Francisco',
                type: 'Estate',
                bedrooms: 15,
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
            }
        }, {
            type: 'projects',
            id: 'cofia',
            attributes: {
                title: 'Cofia',
                owner: 'Mike Teavee',
                city: 'Seattle',
                type: 'Condo',
                bedrooms: 1,
                image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
            }
        }, {
            type: 'projects',
            id: 'van-gogh',
            attributes: {
                title: 'Van Gogh',
                owner: 'Violet Beauregarde',
                city: 'Portland',
                type: 'Apartment',
                bedrooms: 3,
                image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
            }
        }];

    this.get('/projects', function(db, request) {
        if(request.queryParams.title !== undefined) {
            let filteredProjects = projects.filter(function(i) {
                return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
            });
            return { data: filteredProjects };
        } else {
            return { data: projects };
        }
    });

    // Find and return the provided project from our project list above
    this.get('/projects/:id', function (db, request) {
        return { data: projects.find((project) => request.params.id === project.id) };
    });
}