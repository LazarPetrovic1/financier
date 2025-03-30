In Semantic Versioning (SemVer), the patch level (X.Y.Z where Z is the patch) is used to denote backward-compatible bug fixes. This means that any changes made at the patch level should not affect the public API and are intended to fix issues without introducing new features or breaking changes.

+ Major Version (X): This is incremented when there are backward-incompatible changes to the public API.
+ Minor Version (Y): This is incremented for new, backward-compatible functionality or when existing functionality is marked as deprecated.
+ Patch Version (Z): This is incremented for backward-compatible bug fixes that do not affect the public API.

When deciding to increment the patch version, developers should ensure that the changes are strictly limited to bug fixes and do not introduce any new features or break existing functionality