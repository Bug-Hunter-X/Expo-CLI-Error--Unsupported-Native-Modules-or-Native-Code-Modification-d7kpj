# Expo CLI Error: Unsupported Native Modules or Native Code Modification

This repository demonstrates a common error encountered when using the Expo CLI with a managed workflow: attempting to utilize unsupported native modules or directly modifying the underlying native code. This leads to ambiguous error messages, making troubleshooting challenging.

## Problem

The managed workflow provided by Expo simplifies development by abstracting away native code. However, directly interacting with native modules or modifying the native components is against this model and results in errors.

## Solution

The core solution is to adhere to the Expo managed workflow and explore alternative approaches.  If you require functionalities not available within the managed workflow, consider the following:

* **Using Expo Modules:** Expo provides various modules to access native functionalities without directly interacting with native code.
* **Ejecting to Bare Workflow:**  If you absolutely need to control the native code, you can eject your project from the managed workflow to a bare workflow.  This gives you complete control but requires more in-depth knowledge of native mobile development (iOS and Android).
* **Using a compatible library:** If the error comes from an incompatible 3rd party library, consider finding a compatible alternative that works with the Expo managed workflow.
