# ReactOneListClient
Practice with React useEffect with API

1. As always, we start
with static HTML and
CSS

2. Convert static
JSX to JSX derived
from state

3. Try changing some data
Change text, add items, remove items, change completed
state
Notice we need a little logic on our li so we can change the class
based on complete

4. Actions
• Hook this up to the API and load data when the component
first mounts
• Time for useEffect
useEffect(function () {
console.log('this runs when the component first mounts')
}, [])

5. Update state
• Make our default state an empty array again
• Inside the useEffect, call setTodoItems
const [todoItems, setTodoItems] = useState([])
useEffect(async function () {
const response = await axios.get(
'https://one-list-api.herokuapp.com/items?access_token=cohort42'
)
if (response.status === 200) {
console.log(response.data)
setTodoItems(response.data)
}
}, [])

