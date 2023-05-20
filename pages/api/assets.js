async function assets(request, response) {
    // If some sensive information is needed use this. Ref: https://www.youtube.com/watch?v=f7JWDLFhR_c&list=PLMdYygf53DP7FJzPslLnmqp0QylyFfA8a&index=3
    // const varName = process.env.ENVIRONENT_VAR_NAME
    var url = new URL("https://sheetdb.io/api/v1/pi3bvvgduaew2")
    // var newRequest = new Request(url)
    
    // const params = {
    //     ticker: ['BBAS3', 'PETR4']
    // };
    
    const queryParams = new URLSearchParams(request.query);
    const requestUrl = `${url}?${queryParams}`;

    console.log(requestUrl.toString())

    const assetsResponse = await fetch(requestUrl)
    
    // Enable chache control
    // response.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')

    response.json(await assetsResponse.json())
}

export default assets