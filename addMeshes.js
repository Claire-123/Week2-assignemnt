import * as THREE from 'three'
import { func } from 'three/examples/jsm/nodes/code/FunctionNode.js'

const tLoader = new THREE.TextureLoader

export function addSphere(){
	const mat = tLoader.load('/matcap_celshading_011.png')
	const geometry = new THREE.SphereGeometry(0.3, 32, 16)
	const material = new THREE.MeshMatcapMaterial({
		color: 0xa2e5eb,
		matcap: mat
	})
	const mesh = new THREE.Mesh(geometry, material)
	mesh.position.set(0, 0, 0)
	return mesh
}

export function addCone(){
	const mat = tLoader.load('/matcap_celshading_011.png')
	const geometry = new THREE.ConeGeometry(0.5, 1.5, 8)
	const material = new THREE.MeshMatcapMaterial({
		matcap: mat,
		color: 0xffff9e
	})
	const mesh = new THREE.Mesh(geometry, material)
	return mesh
}

export function addOct(){
	const mat = tLoader.load('/matcap_celshading_011.png')
	const geometry = new THREE.OctahedronGeometry(1, 0)
	const material = new THREE.MeshMatcapMaterial({
		matcap: mat
	})
	const mesh = new THREE.Mesh(geometry, material)
	return mesh
}

export function addCube(){
	const mat = tLoader.load('/matcap_celshading_011.png')
	const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4)
	const material = new THREE.MeshMatcapMaterial({
		color: 0x91e695,
		matcap: mat
	})
	const mesh = new THREE.Mesh(geometry, material)
	return mesh
}