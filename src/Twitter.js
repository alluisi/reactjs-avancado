import { useEffect, memo, useState } from "react";

// É o inverso do shouldComponentUpdate
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading
}

function Twitter(props) {
  const { loading } = props;
  const [tweet, setTweet] = useState('title');

  // componentDidMount
  useEffect(() => {
    const { posts, loading } = props
    console.log('componentDidMount', posts)
    console.log('componentDidMount: loading', loading)
  }, [])

  // componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate', loading)
  }, [loading])

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount: fui removido :(')
    }
  }, [])

  const handleTweet = () => {
    setTweet('Tweet atualizado')
  }
  console.log('Tweet atualizado:', tweet)

  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
      Teste
    </div>
  );
}

export default memo(Twitter, areEqual);