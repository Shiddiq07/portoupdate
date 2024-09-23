import profileImage from '../../assets/tailwind.png';

export default function About() {
    return (
      <div className="flex bg-gradient-to-r from-cyan-500 to-blue-500 w-auto" >
  <div class="flex-auto w-32 ">
    <img src={profileImage} alt="contoh profil shiddiq" className="w-64 h-auto rounded-lg shadow-lg"/>
 <h1 className='text-4xl'> Muhammad Shiddiq Baihaqi</h1>
  </div>
 
  <div className="flex-auto w-64">
   <h2> Sedang menempuh perkuliahan di LP3I Jakarta</h2>
  </div>
</div>
    );
}
  