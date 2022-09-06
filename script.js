//escena
const scene = new THREE.Scene();

//objeto
const geometry = new THREE.BoxGeometry(10,10,10);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Tamaños
const sizes ={
        width: 800,
        height: 600
};

//camara
const camera = new THREE.PerspectiveCamera(75, sizes.with/sizes.height);
scene.add(camera);

//Lienzo
const canvas = document.querySelector('canvas.webgl');

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene,camera);