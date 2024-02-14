// Brand property for MajorCredits Interface
const majorCreditsBrand: unique symbol = Symbol();

// MajorCredits Interface
interface MajorCredits {
    brand: typeof majorCreditsBrand;
    credits: number;
}

// Brand property for MinorCredits Interface
const minorCreditsBrand: unique symbol = Symbol();

// MinorCredits Interface
interface MinorCredits {
    brand: typeof minorCreditsBrand;
    credits: number;
}

// Sums the credits of the two subjects
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits{
    const sumCredits = subject1.credits + subject2.credits;
    return { brand: majorCreditsBrand, credits: sumCredits }
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const sumCredits = subject1.credits + subject2.credits;
    return { brand: minorCreditsBrand, credits: sumCredits };
}