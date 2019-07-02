const uuidv4 = require('uuid/v4');

const data = [
  {
    id: uuidv4(),
    title: "PHYSICS",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    like_count: 78,
    comment_count: 5,
    author: {
      first_name: "Linda",
      last_name: "Duncan"
    }
  },
  {
    id: uuidv4(),
    title: "TECHNOLOGY",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    like_count: 55,
    comment_count: 3,
    author: {
      first_name: "Jeremy",
      last_name: "Turner"
    }
  },
  {
    id: uuidv4(),
    title: "CHEMISRTRY",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    like_count: 20,
    comment_count: 1,
    author: {
      first_name: "Austin",
      last_name: "Simmons"
    }
  },
  {
    id: uuidv4(),
    title: "MATH",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    like_count: 35,
    comment_count: 11,
    author: {
      first_name: "Daniel",
      last_name: "Ortiz"
    }
  },
  {
    id: uuidv4(),
    title: "SOCIAL STUDIES",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    like_count: 53,
    comment_count: 8,
    author: {
      first_name: "Thomas",
      last_name: "Munoz"
    }
  },
  {
    id: uuidv4(),
    title: "APPLIED ARTS",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    like_count: 27,
    comment_count: 10,
    author: {
      first_name: "Dorothy",
      last_name: "Campbell"
    }
  },
  {
    id: uuidv4(),
    title: "ENGLISH",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    like_count: 42,
    comment_count: 8,
    author: {
      first_name: "Nathan",
      last_name: "Bowman"
    }
  },
  {
    id: uuidv4(),
    title: "FINE ARTS",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    like_count: 39,
    comment_count: 25,
    author: {
      first_name: "Evelyn",
      last_name: "Schneider"
    }
  },
  {
    id: uuidv4(),
    title: "EARTH SCIENCE",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    like_count: 6,
    comment_count: 3,
    author: {
      first_name: "Alan",
      last_name: "Campbell"
    }
  },
  {
    id: uuidv4(),
    title: "GEOLOGY",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    like_count: 13,
    comment_count: 20,
    author: {
      first_name: "Julie",
      last_name: "Romero"
    }
  }
]

module.exports = data
