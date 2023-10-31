import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";
// The validate function takes an array of validation chains (ValidationChain[]), where each validation chain is created using express-validator functions.

// It returns an asynchronous middleware function that will run the specified validations on the request.

// Inside the middleware, it iterates over the provided validation chains and runs each validation using validation.run(req). If any validation fails (i.e., the result is not empty), the loop breaks, and it proceeds to handle the errors.

// After the loop, it checks for validation errors using validationResult(req). If there are no errors, it calls the next function to move on to the next middleware in the Express chain.

// If there are validation errors, it sends a response with a 422 Unprocessable Entity status and a JSON object containing the validation errors.
// result.isEmpty() Method:  The isEmpty() method is a function that you can call on the result object. It returns true if there are no validation errors, and false if there are errors.
export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res.status(422).json({ errors: errors.array() });
  };
};

export const loginValidator = [
  body("email").trim().isEmail().withMessage("Email is required"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password should contain atleast 6 characters"),
];

export const signupValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  ...loginValidator,
];

export const chatCompletionValidator = [
  body("message").notEmpty().withMessage("Message  is required"),
];

// import { NextFunction } from "express";
// import { ValidationChain, body, validationResult } from "express-validator";

// const validate = (validations: ValidationChain[]) => {
//     return async (req: Request, res: Response, next: NextFunction) => {
//         for (let validation of validations) {
//             const result = await validation.run(req)
//             if (!result.isEmpty()) { break }
//         }
//         const errors = validationResult(req)
//         if (errors.isEmpty()) {
//             return next()
//         }
//         return res.status(422).json({ errors: errors.array() })
        
//     }
// }
// const signupValidator = [
//     body("name").notEmpty().withMessage('Name is required'),
//     body("email").trim().isEmail().withMessage('Email is required'),
//     body("password").trim().isLength({ min: 6 }).withMessage('Password should contain at least 6 characters')

// ]