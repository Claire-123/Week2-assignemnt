import './style.css'
import * as THREE from 'three'
import { addCone, addOct, addSphere, addCube } from './addMeshes'
import { addLight } from './addLights'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({ antialias: true })
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)

let tick = 0;

camera.position.set(0, 0, 5)
// let mesh
const meshes = {}
const controls = new OrbitControls(camera, renderer.domElement)

init()

function init() {
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	//meshes
	meshes.sphere1 = addSphere()
	meshes.sphere2 = addSphere()

	meshes.oct = addOct()

	meshes.cube1 = addCube()
	meshes.cube2 = addCube()

	meshes.cone1 = addCone()
	meshes.cone1.position.set(0, 0, 3)
	meshes.cone1.rotation.x = Math.PI/2
	meshes.cone1.rotation.z = Math.PI
	
	meshes.cone2 = addCone()
	meshes.cone2.rotation.x = Math.PI/2
	meshes.cone2.position.set(0, 0, -3)
	
	meshes.cone3 = addCone()
	meshes.cone3.position.set(0, 3, 0)
	meshes.cone3.rotation.x = Math.PI

	meshes.cone4 = addCone()
	meshes.cone4.position.set(0, -3, 0)
	meshes.cone4.rotation.x = Math.PI
	meshes.cone4.rotation.z = Math.PI

	//lights
	meshes.defaultLight = addLight()

	//scene operations
	scene.add(meshes.sphere1)
	scene.add(meshes.sphere2)
	scene.add(meshes.cone1)
	scene.add(meshes.cone2)
	scene.add(meshes.cone3)
	scene.add(meshes.cone4)
	scene.add(meshes.oct)
	scene.add(meshes.cube1)
	scene.add(meshes.cube2)

	scene.add(meshes.defaultLight)

	resize()
	animate()
}

function resize() {
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate() {
	requestAnimationFrame(animate)

	meshes.cone1.position.x = 3 * Math.sin(tick)
	meshes.cone1.position.z = 3 * Math.cos(tick)
	meshes.cone1.rotation.z -= 0.02

	meshes.cone2.position.x = -3 * Math.sin(tick)
	meshes.cone2.position.z = -3 * Math.cos(tick)
	meshes.cone2.rotation.z -= 0.02

	meshes.cone3.position.z = 3 * Math.sin(tick)
	meshes.cone3.position.y = 3 * Math.cos(tick)
	meshes.cone3.rotation.x += 0.02

	meshes.cone4.position.z = -3 * Math.sin(tick)
	meshes.cone4.position.y = -3 * Math.cos(tick)
	meshes.cone4.rotation.x += 0.02

	meshes.oct.rotation.y += 0.01

	meshes.sphere1.position.x = 3 * Math.sin(tick*2)
	meshes.sphere1.position.y = 1 * Math.cos(tick*2)

	meshes.sphere2.position.y = 2 * Math.sin(tick*2)
	meshes.sphere2.position.x = 4 * Math.cos(tick*2)

	meshes.cube1.rotation.x += 0.01
	meshes.cube1.rotation.y += 0.01
	meshes.cube1.position.z = 4.5 * Math.sin(tick/2)
	meshes.cube1.position.x = 4.5 * Math.cos(tick/2)

	meshes.cube2.rotation.x += 0.01
	meshes.cube2.rotation.y += 0.01
	meshes.cube2.position.z = -4.5 * Math.sin(tick/2)
	meshes.cube2.position.x = -4.5 * Math.cos(tick/2)

	tick += 0.02;
	renderer.render(scene, camera)
}
