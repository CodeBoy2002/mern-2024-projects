import Student from "../models/model.js";

const getStudents = async (req, res) => {
  try {
    const students = await Student.find()
    if(!students) return res.status(400).json({ message: 'Error finding data' })

    return res.status(200).json({ data: students })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

const createStudent = async (req, res) => {
  try {
    const student = {
        name: req.body.name,
        rollNumber: req.body.rollNumber,
        class: req.body.class,
        branch: req.body.branch,
        age: req.body.age,
        phoneNumber: req.body.phoneNumber,
        emailId: req.body.emailId
    }

    const createdStudent = await Student.create(student)

    if(!createdStudent) return res.status(400).json({ message: "Error Occur during data creation" })

    return res.status(200).json({ message: "Student created successfully" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

const getStudent = async (req, res) => {
  try {
    const { id } = req.params

    const singleStudent = await Student.findById(id)

    if(!singleStudent) return res.status(400).json({ message: "Student not found" })

    return res.status(200).json({ message: singleStudent })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params
    const deleteStudent = await Student.findByIdAndDelete(id)

    if(!deleteStudent) return res.status(400).json({ message: "Student with id not found" })

    return res.status(200).json({ message: `Student with ${id} is deleted Successfully` })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params

    const updatedStudent = await Student.findByIdAndUpdate(id, req.body)

    if(!updatedStudent) return res.status(400).json({ message: "Student not updated" })

    return res.status(200).json({ message: "Student updated successfully" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export { getStudents, getStudent, createStudent, deleteStudent, updateStudent };
