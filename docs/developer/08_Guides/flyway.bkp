---
title: Flyway Database Migration
---

# Flyway Database Migration

Flyway is a database migration tool that helps manage database schema changes in a version-controlled, reliable way.

## Why We Use It
- Version control for database schemas
- Consistent database state across all environments
- Automated, repeatable migrations
- Tracks migration history

## How It Works
Flyway looks for migration files in the `db/migration` directory and executes them in version order.

### Migration File Naming
```
V1__Description_of_change.sql
│ │ └─ Descriptive text of the change
│ └─── Double underscore separator
└───── Version number (must be a number and must be unique)
```

### Repeatable Migrations
Repeatable migrations are used to apply changes to the database schema that do not require a version number.

```
R__Description_of_change.sql
│ │ └─ Descriptive text of the change
│ └─── Double underscore separator
└───── Repeatable migration name
```

These migrations are executed in the database every time their checksum changes.

They are useful for applying changes to the database schema that do not require a version number.

For example, views, stored procedures, etc.

### Common Commands
- `migrate`: Apply pending migrations
- `clean`: Remove all objects from the schema
- `info`: Show migration status/history
- `validate`: Verify migrations and checksums
- `repair`: Fix migration history table
- `baseline`: Baseline an existing database
- `undo`: Revert most recent migration (Pro edition)

Commands can be executed using Maven:
```bash
mvn flyway:migrate
mvn flyway:clean
mvn flyway:info
mvn flyway:validate
mvn flyway:repair
mvn flyway:baseline
```

Add the database credentials to the above commands.

E.g.
```
./mvnw flyway:info -Dflyway.url=jdbc:mysql://localhost:3306/fasp -Dflyway.user=root -Dflyway.password=root
``` 

### Best Practices
1. Never modify an existing migration file
2. Always test migrations before applying to production
3. Use descriptive names for migration files
4. Keep migrations idempotent when possible
5. Add new migration files to the end of the list
6. Do not delete migration files

### Troubleshooting
Common issues and solutions:
- **Checksum mismatch**: Use `flyway:repair` if you're sure the change is intended
- **Failed migration**: Fix the issue in a new migration, don't modify the failed one
- **Out of order**: Enable `outOfOrder` property if you need to apply an older version
- **Connection issues**: Verify database credentials and network connectivity


### Further Reading
- [Flyway Documentation](https://documentation.red-gate.com/fd)
- [Flyway Concepts](https://documentation.red-gate.com/fd/flyway-concepts-271583830.html)
- [Flyway Best Practices](https://documentation.red-gate.com/fd/recommended-practices-150700352.html)
