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
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 30;
//camera.position.y = 30;
//camera.position.x = 30;
scene.add(camera);


//Lienzo
const canvas = document.querySelector('canvas.webgl');

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene,camera);

renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

//Animation
function animation(time){
    mesh.rotation.x = time/2000;
    mesh.rotation.y = time/1000;
    renderer.render(scene,camera);


}