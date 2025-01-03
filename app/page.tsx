"use client"

import React from 'react'
import AnimatedBackground from '../components/animated-background'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <header className="py-6 px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Космос 2050
              </motion.div>
            </div>
            <div className="flex space-x-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ul className="flex space-x-4">
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Главная</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Миссии</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Технологии</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Контакты</a></li>
                </ul>
              </motion.div>
            </div>
          </nav>
        </header>
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="text-center">
            <div className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="block">Исследую космос</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  вместе с нами
                </span>
              </motion.div>
            </div>
            <div className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Открыл для себя новые горизонты космических исследований. Будущее, о котором мы всегда мечтал.
              </motion.div>
            </div>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 md:py-4 md:text-lg md:px-10">
                    Начать путешествие
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 