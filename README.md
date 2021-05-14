## Installation

To install the software [click here](https://github.com/wirlleyd/dbhelper-tcc/releases/download/v1.0.0/DBHelper.Setup.1.0.0.exe). The software does not have a provider, so when installing on the Windows operating system, it will be necessary to allow installation with an unknown provider.

## Creating Tables

First, it will be necessary to create a table to access the other functions. For the creation of the table, some primitive types will be made available, and after registering all types and entering a name for the table, it will be necessary to inform the primary key. So click on 'executar' to create the table.

The blank area below the table creation is reserved to display a preview of the command in the sql language. This preview will be displayed as soon as the user gives a name to the table and at least one attribute.

All tables created will be made available for use in the area of ​​data entry and record search.

## Data Entry

This functionality will be released after the creation of the first table.

By default, the table used will be the first table created, which can be changed to other tables by selecting in the selection field.

The order of the fields can be changed by clicking on the arrow icon between the fields if there is more than one field. Primary keys are created automatically, so this field will never be made available for manual insert.

The table may also be fed by an external file in .txt format, where the records to be registered should be separated by a line break. If the file has an invalid record format, this lines will be reported for correction.
IMPORTANT: The records must be in the pre-established sequence, which can be changed before reading the external file. Changing the order of the fields will NOT affect the records already registered.

## Record Search

This functionality will be released after the creation of the first table.

By default, the table used will be the first table created, which can be changed to other tables by selecting in the selection field.

In this section, queries can be made on the tables created previously and with the data registered in it. Conditional clauses may be applied, and later an table will be displayed below with the clauses applied sequentially SIMULATING the functioning of a relational database.

To carry out the consultation it will be mandatory to inform the desired fields, either all ('\*') or specific fields.
