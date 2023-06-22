'use client'

import { useEffect } from 'react'
import * as THREE from 'three'
import Navbar from 'components/navbar/Navbar'
import styles from 'styles/Home.module.scss'
import Resume from 'components/resume/Resume'

const NUMBER_OF_STARS = 1000

export default function Index() {
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      NUMBER_OF_STARS
    )
    const renderer = new THREE.WebGLRenderer()
    const starGeometry = new THREE.BufferGeometry()
    const starVertices = new Float32Array(NUMBER_OF_STARS * 3)

    const animate = () => {
      starGeometry.rotateZ(0.0001)
      starGeometry.rotateX(0.001)
      starGeometry.rotateY(0.0001)

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    const Initialize = () => {
      for (let i = 0; i < NUMBER_OF_STARS; i++) {
        starVertices[i * 3] = Math.random() * 500 - 300 // Update the correct index for x-coordinate
        starVertices[i * 3 + 1] = Math.random() * 500 - 300 // Update the correct index for y-coordinate
        starVertices[i * 3 + 2] = Math.random() * 500 - 300 // Update the correct index for z-coordinate
      }

      starGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3))

      const sprite = new THREE.TextureLoader().load('/star.png', () => {
        renderer.render(scene, camera)
      })

      const spriteMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        map: sprite,
        transparent: true,
      })
      const spriteMesh = new THREE.Points(starGeometry, spriteMaterial)
      camera.position.z = Math.PI / 2
      camera.position.y = Math.PI / 2
      renderer.setSize(window.innerWidth, window.innerHeight)

      scene.add(spriteMesh)
      renderer.domElement.style.position = 'fixed'
      renderer.domElement.style.top = '0px'
      renderer.domElement.style.left = '0px'
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      renderer.domElement.style.zIndex = '-1'

      document.body.appendChild(renderer.domElement)

      animate()
    }

    Initialize()
  }, [])

  return (
    <div className={styles.container}>
      <Navbar />
      <Resume />
    </div>
  )
}
