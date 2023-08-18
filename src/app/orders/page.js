"use client"
import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import AdminLayout from '../components/layouts/admin/AdminLayout'
import useCourseStore from '@/hooks/courseStore'

const Orders = () => {
  // const courses = useCourseStore((state) => state.courses);
  // const removeCourse = useCourseStore((state) => state.removeCourse);
  // const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

  const {courses, removeCourse, toggleCourseStatus} = useCourseStore((state) => ({
    courses: state.courses,
    removeCourse: state.removeCourse,
    toggleCourseStatus: state.toggleCourseStatus
  }))
  console.log(courses);
  return (
    <AdminLayout>
      <h2>course list</h2>
      <ul>
        {courses.map((course,i) => {
          return (
            <li
              className={`${course.completed ? "bg-gray-500" : "bg-gray-200"}`}
            >
              <span>
                <input 
                  type="checkbox"  
                  checked={course.completed}
                  onChange={(e) => toggleCourseStatus(course.id)}
                />
              </span>
              <span>{course?.title}</span>
              <button
                onClick={() => removeCourse(course.id)}
              >Delete</button>
            </li>
          )
        })}
      </ul>

    </AdminLayout>
  )
}

export default Orders