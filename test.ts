type F = (x: number) => number;

function compose(functions: F[]): F {
    return function (x: number): number {
        for (let i = functions.length; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */