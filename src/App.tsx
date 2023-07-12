import './App.css'
import {Fetch, useFetch} from 'clean-fetch'
import {useState} from 'react'

let d = 1

function App() {
	const [, rerender] = useState(0)
	const {reload, data, error} = useFetch<number>(async () => {
		await new Promise(resolve => setTimeout(resolve, 1000))
		// throw new Error('hi')
		d++
		return d
	})

	return (
		<>
			hello
			<div>
				data: {JSON.stringify(data ?? 'undefined')}
			</div>
			<div>
				error: {JSON.stringify(error?.message ?? 'undefined')}
			</div>
			<div>
				<button onClick={reload}>Reload</button>
			</div>
			<div>
				<button onClick={() => rerender(a => a + 1)}>Re-render</button>
			</div>
			<Fetch fetch={async () => {
				await new Promise(resolve => setTimeout(resolve, 1000))
				// throw new Error('hi')
				d++
				return d
			}}>
				{(data, reload) => <>
					<div>
						{JSON.stringify(data ?? 'undefined')}
					</div>
					<div>
						<button onClick={reload}>Reload</button>
					</div>
				</>}
			</Fetch>
		</>
	)
}

export default App
