function getMaxLessThanK(n, k) {
    let max = 0;

    // Loop through all possible 'a' (1 ... n - 1)
    for (let a = 1; a < n; a++) {
        
        // Loop through all possible 'b' (2 ... n)
        for (let b = a + 1; b <= n; b++) {
            
            let bitwiseAnd = a & b;
            
            // If value is < k, check if it's a new maximum
            if (bitwiseAnd < k && max < bitwiseAnd) {
            
                // Set new maximum
                max = bitwiseAnd;
            }
        }
    }
    
    return max;
}
