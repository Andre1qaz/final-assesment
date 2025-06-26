function fibonacci(n) {

    function fibValue(index) {
        if (index === 0) return 0;
        if (index === 1) return 1;
        return fibValue(index - 1) + fibValue(index - 2);
    }
    function buildFibArray(currentIndex, targetIndex, result = []) {
        if (currentIndex > targetIndex) {
            return result;
        }
        result.push(fibValue(currentIndex));
        return buildFibArray(currentIndex + 1, targetIndex, result);
    }
    return buildFibArray(0, n);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;