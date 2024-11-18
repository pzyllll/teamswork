import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// 导入数据
const countryGoldsData = [
  {
    "id": 1,
    "country": "China",
    "gold": 38,
    "silver": 32,
    "bronze": 18,
    "desc": "Eastern Powerhouse",
    "color": "#F40002"
  },
  {
    "id": 2,
    "country": "United States",
    "gold": 46,
    "silver": 37,
    "bronze": 36,
    "desc": "Sports Powerhouse",
    "color": "#87d068"
  },
  {
    "id": 3,
    "country": "Russia",
    "gold": 20,
    "silver": 28,
    "bronze": 23,
    "desc": "Traditional Sports Powerhouse",
    "color": "#f50"
  },
  {
    "id": 4,
    "country": "United Kingdom",
    "gold": 22,
    "silver": 21,
    "bronze": 22,
    "desc": "Historical Sports Powerhouse",
    "color": "#108ee9"
  },
  {
    "id": 5,
    "country": "Germany",
    "gold": 17,
    "silver": 10,
    "bronze": 15,
    "desc": "European Sports Powerhouse",
    "color": "#7265e6"
  },
  {
    "id": 6,
    "country": "France",
    "gold": 10,
    "silver": 12,
    "bronze": 11,
    "desc": "Sporting Elegance of the Romantic Country",
    "color": "#ffbf00"
  },
  {
    "id": 7,
    "country": "Japan",
    "gold": 27,
    "silver": 14,
    "bronze": 17,
    "desc": "Light of the Orient",
    "color": "#00a2ae"
  },
  {
    "id": 8,
    "country": "Australia",
    "gold": 17,
    "silver": 7,
    "bronze": 22,
    "desc": "Oceania Sports Powerhouse",
    "color": "#f56a00"
  },
  {
    "id": 9,
    "country": "South Korea",
    "gold": 9,
    "silver": 5,
    "bronze": 9,
    "desc": "Asian Sports Powerhouse",
    "color": "#7265e6"
  },
  {
    "id": 10,
    "country": "Italy",
    "gold": 10,
    "silver": 10,
    "bronze": 20,
    "desc": "Mediterranean Sporting Charm",
    "color": "#ffbf00"
  },
  {
    "id": 11,
    "country": "Netherlands",
    "gold": 10,
    "silver": 12,
    "bronze": 14,
    "desc": "European Lowlands Nation",
    "color": "#00a2ae"
  },
  {
    "id": 12,
    "country": "Spain",
    "gold": 8,
    "silver": 11,
    "bronze": 13,
    "desc": "Land of Bullfighters",
    "color": "#f5222d"
  },
  {
    "id": 13,
    "country": "Canada",
    "gold": 7,
    "silver": 14,
    "bronze": 11,
    "desc": "North American Maple Leaf Country",
    "color": "#fa541c"
  },
  {
    "id": 14,
    "country": "Sweden",
    "gold": 6,
    "silver": 8,
    "bronze": 9,
    "desc": "Nordic Welfare State",
    "color": "#fa8c16"
  },
  {
    "id": 15,
    "country": "Poland",
    "gold": 5,
    "silver": 7,
    "bronze": 10,
    "desc": "Important Eastern European Country",
    "color": "#a0d911"
  },
  {
    "id": 16,
    "country": "Brazil",
    "gold": 7,
    "silver": 6,
    "bronze": 8,
    "desc": "South American Football Kingdom",
    "color": "#eb2f96"
  },
  {
    "id": 17,
    "country": "New Zealand",
    "gold": 7,
    "silver": 6,
    "bronze": 7,
    "desc": "South Pacific Island Nation",
    "color": "#722ed1"
  },
  {
    "id": 18,
    "country": "Denmark",
    "gold": 6,
    "silver": 7,
    "bronze": 5,
    "desc": "Nordic Fairy Tale Kingdom",
    "color": "#13c2c2"
  },
  {
    "id": 19,
    "country": "Switzerland",
    "gold": 4,
    "silver": 8,
    "bronze": 6,
    "desc": "European Neutral Country",
    "color": "#1890ff"
  },
  {
    "id": 20,
    "country": "Belgium",
    "gold": 3,
    "silver": 5,
    "bronze": 7,
    "desc": "European Chocolate Country",
    "color": "#faad14"
  }
  ]

const projectsData = [
  {
    "id": 1,
    "countryId": 1,
    "projects": [
      {
        "projectName": "Table Tennis",
        "gold": 4,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Badminton",
        "gold": 2,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Diving",
        "gold": 3,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Shooting",
        "gold": 5,
        "silver": 4,
        "bronze": 2
      },
      {
        "projectName": "Gymnastics",
        "gold": 3,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Weightlifting",
        "gold": 5,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Swimming",
        "gold": 3,
        "silver": 2,
        "bronze": 3
      },
      {
        "projectName": "Athletics",
        "gold": 2,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Taekwondo",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Basketball",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "Volleyball",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "Football",
        "gold": 0,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 2,
    "countryId": 2,
    "projects": [
      {
        "projectName": "Athletics",
        "gold": 10,
        "silver": 10,
        "bronze": 10
      },
      {
        "projectName": "Swimming",
        "gold": 12,
        "silver": 9,
        "bronze": 8
      },
      {
        "projectName": "Basketball",
        "gold": 2,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "Football",
        "gold": 0,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Gymnastics",
        "gold": 5,
        "silver": 4,
        "bronze": 3
      },
      {
        "projectName": "Wrestling",
        "gold": 3,
        "silver": 3,
        "bronze": 3
      },
      {
        "projectName": "Shooting",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Tennis",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Volleyball",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 3,
    "countryId": 3,
    "projects": [
      {
        "projectName": "Athletics",
        "gold": 3,
        "silver": 4,
        "bronze": 5
      },
      {
        "projectName": "Wrestling",
        "gold": 4,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Gymnastics",
        "gold": 2,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Rhythmic Gymnastics",
        "gold": 1,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Shooting",
        "gold": 2,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Swimming",
        "gold": 3,
        "silver": 4,
        "bronze": 3
      },
      {
        "projectName": "Fencing",
        "gold": 1,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Figure Skating",
        "gold": 1,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Ice Hockey",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      }
    ]
  },
  {
    "id": 4,
    "countryId": 4,
    "projects": [
      {
        "projectName": "Athletics",
        "gold": 4,
        "silver": 3,
        "bronze": 3
      },
      {
        "projectName": "Cycling",
        "gold": 6,
        "silver": 4,
        "bronze": 3
      },
      {
        "projectName": "Swimming",
        "gold": 3,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Rowing",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Boxing",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Sailing",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Tennis",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Diving",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 5,
    "countryId": 5,
    "projects": [
      {
        "projectName": "Athletics",
        "gold": 2,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Swimming",
        "gold": 2,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Rowing",
        "gold": 3,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Shooting",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Equestrian",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Canoeing",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Modern Pentathlon",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "Football",
        "gold": 0,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 6,
    "countryId": 6,
    "projects": [
      {
        "projectName": "Athletics",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Swimming",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Fencing",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Cycling",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Judo",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Sailing",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Handball",
        "gold": 0,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 7,
    "countryId": 7,
    "projects": [
      {
        "projectName": "Judo",
        "gold": 5,
        "silver": 2,
        "bronze": 3
      },
      {
        "projectName": "Wrestling",
        "gold": 3,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Gymnastics",
        "gold": 3,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Swimming",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Badminton",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Table Tennis",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Baseball",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "Football",
        "gold": 0,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 8,
    "countryId": 8,
    "projects": [
      {
        "projectName": "Swimming",
        "gold": 6,
        "silver": 2,
        "bronze": 5
      },
      {
        "projectName": "Athletics",
        "gold": 2,
        "silver": 1,
        "bronze": 3
      },
      {
        "projectName": "Cycling",
        "gold": 2,
        "silver": 0,
        "bronze": 2
      },
      {
        "projectName": "Sailing",
        "gold": 2,
        "silver": 0,
        "bronze": 2
      },
      {
        "projectName": "Basketball",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "Hockey",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "Rowing",
        "gold": 1,
        "silver": 0,
        "bronze": 2
      },
      {
        "projectName": "Triathlon",
        "gold": 1,
        "silver": 0,
        "bronze": 1
      }
    ]
  },
  {
    "id": 9,
    "countryId": 9,
    "projects": [
      {
        "projectName": "Archery",
        "gold": 4,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Taekwondo",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Badminton",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Judo",
        "gold": 1,
        "silver": 0,
        "bronze": 1
      },
      {
        "projectName": "Table Tennis",
        "gold": 0,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 10,
    "countryId": 10,
    "projects": [
      {
        "projectName": "Athletics",
        "gold": 2,
        "silver": 2,
        "bronze": 4
      },
      {
        "projectName": "Swimming",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Fencing",
        "gold": 2,
        "silver": 2,
        "bronze": 4
      },
      {
        "projectName": "Cycling",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Sailing",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Judo",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Volleyball",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      }
    ]
  },
  {
    "id": 11,
    "countryId": 11,
    "projects": [
      {
        "projectName": "Cycling",
        "gold": 4,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Swimming",
        "gold": 2,
        "silver": 2,
        "bronze": 3
      },
      {
        "projectName": "Sailing",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Hockey",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Rowing",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Speed Skating",
        "gold": 1,
        "silver": 2,
        "bronze": 4
      }
    ]
  },
  {
    "id": 12,
    "countryId": 12,
    "projects": [
      {
        "projectName": "Tennis",
        "gold": 2,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Basketball",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Handball",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Sailing",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Cycling",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Football",
        "gold": 1,
        "silver": 2,
        "bronze": 3
      }
    ]
  },
  {
    "id": 13,
    "countryId": 13,
    "projects": [
      {
        "projectName": "Ice Hockey",
        "gold": 2,
        "silver": 3,
        "bronze": 1
      },
      {
        "projectName": "Swimming",
        "gold": 2,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Canoeing",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Athletics",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Freestyle Skiing",
        "gold": 1,
        "silver": 4,
        "bronze": 4
      }
    ]
  },
  {
    "id": 14,
    "countryId": 14,
    "projects": [
      {
        "projectName": "Cross-Country Skiing",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Ice Hockey",
        "gold": 1,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Wrestling",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Swimming",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Sailing",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      }
    ]
  },
  {
    "id": 15,
    "countryId": 15,
    "projects": [
      {
        "projectName": "Athletics",
        "gold": 2,
        "silver": 2,
        "bronze": 3
      },
      {
        "projectName": "Weightlifting",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Volleyball",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Fencing",
        "gold": 1,
        "silver": 2,
        "bronze": 3
      }
    ]
  },
  {
    "id": 16,
    "countryId": 16,
    "projects": [
      {
        "projectName": "Football",
        "gold": 2,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Volleyball",
        "gold": 2,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Sailing",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Judo",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Athletics",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 17,
    "countryId": 17,
    "projects": [
      {
        "projectName": "Rowing",
        "gold": 3,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Sailing",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Athletics",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Rugby",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      }
    ]
  },
  {
    "id": 18,
    "countryId": 18,
    "projects": [
      {
        "projectName": "Handball",
        "gold": 2,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Cycling",
        "gold": 2,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Sailing",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Badminton",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 19,
    "countryId": 19,
    "projects": [
      {
        "projectName": "Tennis",
        "gold": 2,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Cycling",
        "gold": 1,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Rowing",
        "gold": 1,
        "silver": 3,
        "bronze": 3
      }
    ]
  },
  {
    "id": 20,
    "countryId": 20,
    "projects": [
      {
        "projectName": "Cycling",
        "gold": 2,
        "silver": 2,
        "bronze": 3
      },
      {
        "projectName": "Hockey",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Athletics",
        "gold": 0,
        "silver": 1,
        "bronze": 2
      }
    ]
  }
]

export default {
  async getPage(perPage: number, page: number) {
    const start = (page - 1) * perPage
    const end = start + perPage
    return {
      data: countryGoldsData.slice(start, end)
    }
  },

  async getTotal() {
    return {
      data: countryGoldsData
    }
  },

  async getDetail(id: number) {
    const country = countryGoldsData.find(item => item.id === id)
    return {
      data: country
    }
  },

  async getProjects(countryId: number, perPage: number, page: number) {
    const start = (page - 1) * perPage
    const countryProjects = projectsData.find(item => item.countryId === countryId)?.projects || []

    const paginatedProjects = countryProjects.slice(start, start + perPage)

    return {
      data: paginatedProjects,
      total: countryProjects.length
    }
  }
}
