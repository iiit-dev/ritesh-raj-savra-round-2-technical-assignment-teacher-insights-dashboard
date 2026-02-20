import { teacherDataSet } from "./savra-teacher-data-set.js"

export const getSubjectWiseActivityGrowth = () => {
  const activityByDateAndSubject = {}
  
  teacherDataSet.forEach((record) => {
    const date = record.Created_at.split(" ")[0]
    const subject = record.Subject
    
    if (!activityByDateAndSubject[date]) {
      activityByDateAndSubject[date] = {
        date,
        Mathematics: 0,
        Science: 0,
        English: 0,
        "Social Studies": 0,
      }
    }
    
    if (subject in activityByDateAndSubject[date]) {
      activityByDateAndSubject[date][subject]++
    }
  })
  
  return Object.values(activityByDateAndSubject).sort((a, b) => 
    new Date(a.date) - new Date(b.date)
  )
}
