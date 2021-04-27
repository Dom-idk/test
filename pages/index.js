import Link from "next/link";


  const HomePage = () => {
    return <div>
        Vitej na prvni strance
        Spicy memiky zde:  {" "}
        <Link href="/memes"><a>memes page</a></Link>
    </div>
  }
  
  export default HomePage