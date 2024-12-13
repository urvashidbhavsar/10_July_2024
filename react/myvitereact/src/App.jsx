import './App.css'
import Callimage from './callimage'
import Navbar from './components/navbar'
import Expression from './expression'
import RanderingList from './RanderingList'
import Eventex from './eventex'
// import PassingProps from './passingProps'
// import Conditionex1 from './conditionex1'

function App() {

  return (
    <>
      <Eventex />
      <h1 className='text-3xl text-rose-600 '>
        Hello
      </h1>
      <div className='h-auto w-2/3 border-2 border-solid border-orange-500 p-4 m-4 bg-blue-400 text-white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore voluptates dolorem reprehenderit. Sapiente aliquid necessitatibus laboriosam ea quis deleniti laudantium odit enim consequuntur quasi ipsum, autem at ex dolorum?
      </div>

      <div className='w-[500px] border-[5px] border-solid border-[crimson] p-[20px] m-[30px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore voluptates dolorem reprehenderit. Sapiente aliquid necessitatibus laboriosam ea quis deleniti laudantium odit enim consequuntur quasi ipsum, autem at ex dolorum?
      </div>

      <div className='grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid m-[40px] gap-4 font-josefin'>
        <div className='border-2 border-solid border-sky-700 p-4'>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur dolore perspiciatis cumque modi saepe quia recusandae. Quas iste ducimus dolor voluptatibus cupiditate tenetur iusto harum officiis a nemo. Iusto.
          </p>
        </div>
        <div className='border-2 border-solid border-sky-700 p-4'>
          <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, sed esse. Labore iste ad explicabo at, autem et illo a sed, accusamus nemo quibusdam dignissimos ipsa quis dolorum facilis laborum.
          </p>
        </div>
        <div className='border-2 border-solid border-sky-700 p-4'>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate adipisci quidem sit consequuntur culpa! Ducimus cum aspernatur soluta, voluptatum sint eveniet sit quisquam ipsam odit iste, illo officiis modi impedit.
          </p>
        </div>
      </div>
      {/* <Navbar />
      <Expression />
      <Callimage />
      <RanderingList /> */}
      {/* <PassingProps /> */}
      {/* <Conditionex1 /> */}
    </>
  )
}

export default App
