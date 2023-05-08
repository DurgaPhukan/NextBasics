import { useRouter} from 'next/router';

const PoftfolioProjectPage = () => {
    const router = useRouter()
    console.log(router.pathname);
    console.log(router.query);
  return (
    <div>PoftfolioProjectPage </div>
  )
}

export default PoftfolioProjectPage